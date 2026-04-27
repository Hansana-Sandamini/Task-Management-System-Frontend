import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../api/axiosInstance'
import toast from 'react-hot-toast'
import LoadingSpinner from '../components/LoadingSpinner'
import TaskHeader from '../components/TaskHeader'
import TaskSearch from '../components/TaskSearch'
import TaskEmptyState from '../components/TaskEmptyState'
import TaskItemRow from '../components/TaskItemRow'
import TaskModal from '../components/TaskModal'
import type { ITask } from '../types/Task'

const Tasks = () => {
    const [tasks, setTasks] = useState<ITask[]>([])
    const [loading, setLoading] = useState(true)
    const [showForm, setShowForm] = useState(false)
    const [editingTask, setEditingTask] = useState<ITask | null>(null)
    const [searchTerm, setSearchTerm] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        fetchTasks()
    }, [])

    const fetchTasks = async () => {
        setLoading(true)
        try {
            const response = await api.get('/tasks')
            setTasks(response.data.data)
        } catch (error: any) {
            toast.error(error.response?.data?.message || 'Failed to fetch tasks')
        } finally {
            setLoading(false)
        }
    }

    const handleCreateTask = async (data: { title: string; description: string }) => {
        try {
            const response = await api.post('/tasks', data)
            setTasks([response.data.data, ...tasks])
            setShowForm(false)
            toast.success('Task created successfully')
        } catch (error: any) {
            toast.error(error.response?.data?.message || 'Failed to create task')
        }
    }

    const handleUpdateTask = async (data: { title: string; description: string; status?: string }) => {
        if (!editingTask) return
        try {
            const response = await api.put(`/tasks/${editingTask._id}`, data)
            setTasks(tasks.map(task => task._id === editingTask._id ? response.data.data : task))
            setEditingTask(null)
            toast.success('Task updated successfully')
        } catch (error: any) {
            toast.error(error.response?.data?.message || 'Failed to update task')
        }
    }

    const handleDeleteTask = async (id: string) => {
        if (window.confirm('Are you sure you want to delete this task?')) {
        try {
            await api.delete(`/tasks/${id}`)
            setTasks(tasks.filter(task => task._id !== id))
            toast.success('Task deleted successfully')
        } catch (error: any) {
            toast.error(error.response?.data?.message || 'Failed to delete task')
        }
        }
    }

    const filteredTasks = tasks.filter(task =>
        task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        task.description?.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <div className="min-h-screen bg-gray-50">
            <TaskHeader 
                onBack={() => navigate('/dashboard')}
                onNewTask={() => setShowForm(true)}
            />

            <div className="max-w-7xl mx-auto px-4 py-8">
                <TaskSearch searchTerm={searchTerm} onSearchChange={setSearchTerm} />

                {loading ? (
                    <div className="flex justify-center items-center py-20">
                        <LoadingSpinner />
                    </div>
                    ) : filteredTasks.length === 0 ? (
                    <TaskEmptyState 
                        searchTerm={searchTerm}
                        onCreateClick={() => setShowForm(true)}
                    />
                    ) : (
                    <div className="space-y-3">
                        {filteredTasks.map(task => (
                            <TaskItemRow
                                key={task._id}
                                task={task}
                                onEdit={setEditingTask}
                                onDelete={handleDeleteTask}
                            />
                        ))}
                    </div>
                )}
            </div>

            <TaskModal
                isOpen={showForm}
                task={null}
                onClose={() => setShowForm(false)}
                onSubmit={handleCreateTask}
            />

            <TaskModal
                isOpen={!!editingTask}
                task={editingTask}
                onClose={() => setEditingTask(null)}
                onSubmit={handleUpdateTask}
            />
        </div>
    )
}

export default Tasks
