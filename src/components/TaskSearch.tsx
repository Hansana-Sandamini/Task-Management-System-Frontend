import { FiSearch } from 'react-icons/fi'

interface TaskSearchProps {
    searchTerm: string
    onSearchChange: (value: string) => void
}

const TaskSearch = ({ searchTerm, onSearchChange }: TaskSearchProps) => {
    return (
        <div className="mb-6">
            <div className="relative">
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                    type="text"
                    placeholder="Search tasks by title or description..."
                    value={searchTerm}
                    onChange={(e) => onSearchChange(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-slate-500"
                />
            </div>
        </div>
    )
}

export default TaskSearch
