import { format } from 'date-fns'
import { FiEdit2, FiTrash2, FiCheckCircle, FiClock, FiAlertCircle } from 'react-icons/fi'
import type { ITask } from '../types/Task'

interface TaskCardProps {
    task: ITask
    onEdit: (task: ITask) => void
    onDelete: (id: string) => void
}

const TaskCard = ({ task, onEdit, onDelete }: TaskCardProps) => {
    const getStatusConfig = (status: string) => {
        switch(status) {
            case 'COMPLETED':
                return { label: 'Completed', bgColor: 'bg-green-100', textColor: 'text-green-700', icon: FiCheckCircle }
            case 'IN_PROGRESS':
                return { label: 'In Progress', bgColor: 'bg-blue-100', textColor: 'text-blue-700', icon: FiClock }
            default:
                return { label: 'Pending', bgColor: 'bg-yellow-100', textColor: 'text-yellow-700', icon: FiAlertCircle }
        }
    }

    const statusConfig = getStatusConfig(task.status)
    const StatusIcon = statusConfig.icon

    return (
        <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden border border-gray-100">
            {/* Status Badge */}
            <div className="px-4 py-3 border-b border-gray-100 flex justify-between items-center">
                <div className={`px-2 py-1 rounded-full text-xs font-medium ${statusConfig.bgColor} ${statusConfig.textColor} flex items-center gap-1`}>
                    <StatusIcon className="text-xs" />
                    {statusConfig.label}
                </div>
                <div className="text-xs text-gray-400">
                    {format(new Date(task.createdAt), 'MMM dd')}
                </div>
            </div>

            <div className="p-4">
                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                    {task.title}
                </h3>

                {/* Description */}
                {task.description && (
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {task.description}
                    </p>
                )}

                {/* Actions */}
                <div className="flex gap-2 pt-3 border-t border-gray-100">
                    <button
                        onClick={() => onEdit(task)}
                        className="flex-1 flex items-center justify-center gap-1 px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition text-sm"
                    >
                        <FiEdit2 className="text-sm" />
                        Edit
                    </button>
                    <button
                        onClick={() => onDelete(task._id)}
                        className="flex-1 flex items-center justify-center gap-1 px-3 py-1.5 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition text-sm"
                    >
                        <FiTrash2 className="text-sm" />
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TaskCard
