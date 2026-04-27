import { format } from 'date-fns'
import { FiEdit2, FiTrash2, FiCheckCircle, FiClock, FiAlertCircle } from 'react-icons/fi'
import type { ITask } from '../types/Task'

interface TaskItemProps {
    task: ITask
    onEdit: (task: ITask) => void
    onDelete: (id: string) => void
}

const TaskItem = ({ task, onEdit, onDelete }: TaskItemProps) => {
    const getStatusBadge = (status: string) => {
        switch(status) {
            case 'COMPLETED':
                return (
                    <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium flex items-center gap-1">
                        <FiCheckCircle className="text-xs" />
                        Completed
                    </span>
                )
            case 'IN_PROGRESS':
                return (
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium flex items-center gap-1">
                        <FiClock className="text-xs" />
                        In Progress
                    </span>
                )
            default:
                return (
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-medium flex items-center gap-1">
                        <FiAlertCircle className="text-xs" />
                        Pending
                    </span>
                )
        }
    }

    return (
        <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all p-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                {/* Left side - Task Info */}
                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <h3 className="text-base font-semibold text-gray-900">
                        {task.title}
                        </h3>
                        {getStatusBadge(task.status)}
                    </div>
                    
                    {task.description && (
                        <p className="text-gray-600 text-sm mb-2 line-clamp-1">
                        {task.description}
                        </p>
                    )}
                    
                    <div className="text-gray-400 text-xs">
                        Created: {format(new Date(task.createdAt), 'MMM dd, yyyy')}
                    </div>
                </div>

                {/* Right side - Actions */}
                <div className="flex gap-2">
                    <button
                        onClick={() => onEdit(task)}
                        className="p-2 text-gray-600 hover:text-slate-700 hover:bg-gray-100 rounded-lg transition"
                        title="Edit"
                    >
                        <FiEdit2 className="text-lg" />
                    </button>
                    <button
                        onClick={() => onDelete(task._id)}
                        className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition"
                        title="Delete"
                    >
                        <FiTrash2 className="text-lg" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TaskItem
