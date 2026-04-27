import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import api from '../api/axiosInstance'
import toast from 'react-hot-toast'
import DashboardHeader from '../components/DashboardHeader'
import DashboardWelcome from '../components/DashboardWelcome'
import TaskStats from '../components/TaskStats'
import DashboardActions from '../components/DashboardActions'
import DashboardContent from '../components/DashboardContent'
import ViewAllLink from '../components/ViewAllLink'
import type { ITask } from '../types/Task'

const Dashboard = () => {
    const [tasks, setTasks] = useState<ITask[]>([])
    const [loading, setLoading] = useState(true)
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
    const { user, logout } = useContext(AuthContext)
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

    const handleEditTask = () => {
            navigate('/tasks')
    }

    const handleLogout = () => {
        logout()
        navigate('/login')
    }

    const handleViewAllTasks = () => {
        navigate('/tasks')
    }

    const handleCreateTask = () => {
        navigate('/tasks')
    }

    // Calculate stats
    const totalTasks = tasks.length
    const completedTasks = tasks.filter(t => t.status === 'COMPLETED').length
    const pendingTasks = tasks.filter(t => t.status === 'PENDING').length
    const inProgressTasks = tasks.filter(t => t.status === 'IN_PROGRESS').length

    // Show only recent 6 tasks on dashboard
    const recentTasks = tasks.slice(0, 6)
    const userName = user?.name?.split(' ')[0] || 'User'

    return (
        <div className="min-h-screen bg-gray-50">
            <DashboardHeader userName={userName} onLogout={handleLogout} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <DashboardWelcome />

                <TaskStats 
                    total={totalTasks}
                    completed={completedTasks}
                    pending={pendingTasks}
                    inProgress={inProgressTasks}
                />

                <DashboardActions 
                    viewMode={viewMode}
                    onViewModeChange={setViewMode}
                    onViewAllTasks={handleViewAllTasks}
                    taskCount={totalTasks}
                    showingCount={recentTasks.length}
                />

                <DashboardContent 
                    loading={loading}
                    tasks={recentTasks}
                    viewMode={viewMode}
                    onEditTask={handleEditTask}
                    onDeleteTask={handleDeleteTask}
                    onCreateTask={handleCreateTask}
                />

                <ViewAllLink totalTasks={totalTasks} onClick={handleViewAllTasks} />
            </div>
        </div>
    )
}

export default Dashboard
