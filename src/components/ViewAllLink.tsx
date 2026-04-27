import { FiExternalLink } from 'react-icons/fi'

interface ViewAllLinkProps {
    totalTasks: number
    onClick: () => void
}

const ViewAllLink = ({ totalTasks, onClick }: ViewAllLinkProps) => {
    if (totalTasks <= 6) return null
    
    return (
        <div className="text-center mt-8">
            <button
                onClick={onClick}
                className="text-slate-600 hover:text-slate-700 font-medium flex items-center gap-2 mx-auto"
            >
                View all {totalTasks} tasks
                <FiExternalLink className="text-sm" />
            </button>
        </div>
    )
}

export default ViewAllLink
