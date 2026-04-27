import { FiCheckCircle, FiClock, FiAlertCircle } from 'react-icons/fi'

interface TaskStatusBadgeProps {
    status: string
}

const TaskStatusBadge = ({ status }: TaskStatusBadgeProps) => {
    const getStatusConfig = (status: string) => {
        switch(status) {
            case 'COMPLETED': 
                return { label: 'Completed', bg: 'bg-green-100', text: 'text-green-700', icon: FiCheckCircle }
            case 'IN_PROGRESS': 
                return { label: 'In Progress', bg: 'bg-blue-100', text: 'text-blue-700', icon: FiClock }
            default: 
                return { label: 'Pending', bg: 'bg-yellow-100', text: 'text-yellow-700', icon: FiAlertCircle }
            }
    }

    const config = getStatusConfig(status)
    const Icon = config.icon

    return (
        <span className={`px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${config.bg} ${config.text}`}>
            <Icon className="text-xs" />
            {config.label}
        </span>
    )
}

export default TaskStatusBadge
