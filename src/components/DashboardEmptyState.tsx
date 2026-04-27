interface DashboardEmptyStateProps {
    onCreateTask: () => void
}

const DashboardEmptyState = ({ onCreateTask }: DashboardEmptyStateProps) => {
    return (
        <div className="bg-white rounded-lg shadow-sm p-12 text-center">
            <div className="text-6xl mb-4">📋</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No tasks yet</h3>
            <p className="text-gray-600 mb-4">Get started by creating your first task</p>
            <button
                onClick={onCreateTask}
                className="px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-800 transition"
            >
                Create Your First Task
            </button>
        </div>
    )
}

export default DashboardEmptyState
