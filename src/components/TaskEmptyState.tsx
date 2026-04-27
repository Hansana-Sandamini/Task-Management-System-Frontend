interface TaskEmptyStateProps {
    searchTerm: string
    onCreateClick: () => void
}

const TaskEmptyState = ({ searchTerm, onCreateClick }: TaskEmptyStateProps) => {
    return (
        <div className="bg-white rounded-lg shadow-sm p-12 text-center">
            <div className="text-6xl mb-4">📋</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {searchTerm ? 'No matching tasks found' : 'No tasks yet'}
            </h3>
            <p className="text-gray-600 mb-4">
                {searchTerm ? 'Try a different search term' : 'Create your first task'}
            </p>
            {!searchTerm && (
                <button
                    onClick={onCreateClick}
                    className="px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-800 transition"
                >
                    Create Task
                </button>
            )}
        </div>
    )
}

export default TaskEmptyState
