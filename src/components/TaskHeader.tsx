import { FiArrowLeft, FiPlus } from 'react-icons/fi'

interface TaskHeaderProps {
    onBack: () => void
    onNewTask: () => void
}

const TaskHeader = ({ onBack, onNewTask }: TaskHeaderProps) => {
    return (
        <div className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-10">
            <div className="max-w-7xl mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    <button
                        onClick={onBack}
                        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition"
                    >
                        <FiArrowLeft />
                        Back to Dashboard
                    </button>
                    <h1 className="text-xl font-bold text-gray-900">All Tasks</h1>
                    <button
                        onClick={onNewTask}
                        className="flex items-center gap-2 px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-800 transition"
                    >
                        <FiPlus />
                        New Task
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TaskHeader
