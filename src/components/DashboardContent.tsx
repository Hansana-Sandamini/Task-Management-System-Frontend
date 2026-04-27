import TaskCard from './TaskCard'
import TaskItem from './TaskItem'
import LoadingSpinner from './LoadingSpinner'
import DashboardEmptyState from './DashboardEmptyState'
import type { ITask } from '../types/Task'

interface DashboardContentProps {
    loading: boolean
    tasks: ITask[]
    viewMode: 'grid' | 'list'
    onEditTask: (task: ITask) => void
    onDeleteTask: (id: string) => void
    onCreateTask: () => void
}

const DashboardContent = ({ 
    loading, 
    tasks, 
    viewMode, 
    onEditTask, 
    onDeleteTask, 
    onCreateTask 
}: DashboardContentProps) => {
    if (loading) {
        return (
            <div className="flex justify-center items-center py-20">
                <LoadingSpinner />
            </div>
        )
    }

    if (tasks.length === 0) {
        return <DashboardEmptyState onCreateTask={onCreateTask} />
    }

    if (viewMode === 'grid') {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tasks.map(task => (
                    <TaskCard
                        key={task._id}
                        task={task}
                        onEdit={onEditTask}
                        onDelete={onDeleteTask}
                    />
                ))}
            </div>
        )
    }

    return (
        <div className="space-y-3">
            {tasks.map(task => (
                <TaskItem
                    key={task._id}
                    task={task}
                    onEdit={onEditTask}
                    onDelete={onDeleteTask}
                />
            ))}
        </div>
    )
}

export default DashboardContent
