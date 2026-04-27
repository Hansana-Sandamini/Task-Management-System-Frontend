import { FiEdit2, FiTrash2 } from 'react-icons/fi'
import TaskStatusBadge from './TaskStatusBadge'
import type { ITask } from '../types/Task'

interface TaskItemRowProps {
    task: ITask
    onEdit: (task: ITask) => void
    onDelete: (id: string) => void
}

const TaskItemRow = ({ task, onEdit, onDelete }: TaskItemRowProps) => {
    return (
        <div className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition">
            <div className="flex justify-between items-start">
                <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <h3 className="font-semibold text-gray-900">{task.title}</h3>
                        <TaskStatusBadge status={task.status} />
                    </div>
                    {task.description && (
                        <p className="text-gray-600 text-sm mb-2">{task.description}</p>
                    )}
                    <p className="text-xs text-gray-400">
                        Created: {new Date(task.createdAt).toLocaleDateString()}
                    </p>
                </div>
                <div className="flex gap-2 ml-4">
                    <button
                        onClick={() => onEdit(task)}
                        className="p-2 text-gray-600 hover:text-slate-700 hover:bg-gray-100 rounded-lg transition"
                    >
                        <FiEdit2 />
                    </button>
                    <button
                        onClick={() => onDelete(task._id)}
                        className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition"
                    >
                        <FiTrash2 />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TaskItemRow
