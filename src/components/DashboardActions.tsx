import { FiGrid, FiList, FiExternalLink } from 'react-icons/fi'

interface DashboardActionsProps {
    viewMode: 'grid' | 'list'
    onViewModeChange: (mode: 'grid' | 'list') => void
    onViewAllTasks: () => void
    taskCount: number
    showingCount: number
}

const DashboardActions = ({ 
    viewMode, 
    onViewModeChange, 
    onViewAllTasks, 
    taskCount, 
    showingCount 
}: DashboardActionsProps) => {
    return (
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="text-sm text-gray-500">
                    Showing {showingCount} of {taskCount} recent tasks
                </div>
                
                <div className="flex gap-3">
                    {/* View Toggle */}
                    <div className="flex gap-1 bg-gray-100 rounded-lg p-1">
                        <button
                            onClick={() => onViewModeChange('grid')}
                            className={`p-2 rounded-lg transition ${
                                viewMode === 'grid' 
                                ? 'bg-white shadow-sm text-slate-700' 
                                : 'text-gray-500 hover:text-gray-700'
                            }`}
                        >
                            <FiGrid className="text-xl" />
                        </button>
                        <button
                            onClick={() => onViewModeChange('list')}
                            className={`p-2 rounded-lg transition ${
                                viewMode === 'list' 
                                ? 'bg-white shadow-sm text-slate-700' 
                                : 'text-gray-500 hover:text-gray-700'
                            }`}
                        >
                            <FiList className="text-xl" />
                        </button>
                    </div>
                    
                    {/* Go to Tasks Page Button */}
                    <button
                        onClick={onViewAllTasks}
                        className="flex items-center gap-2 px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-800 transition shadow-sm"
                    >
                        <FiExternalLink className="text-xl" />
                        <span>Manage All Tasks</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DashboardActions
