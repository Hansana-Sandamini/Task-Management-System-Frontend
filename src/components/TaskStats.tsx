import { FiCheckCircle, FiClock, FiAlertCircle, FiList } from 'react-icons/fi'

interface TaskStatsProps {
    total: number
    completed: number
    pending: number
    inProgress: number
}

const TaskStats = ({ total, completed, pending, inProgress }: TaskStatsProps) => {
    const stats = [
        {
            title: 'Total Tasks',
            value: total,
            icon: FiList,
            bgColor: 'bg-slate-50',
            textColor: 'text-slate-600',
            iconColor: 'text-slate-500'
        },
        {
            title: 'Completed',
            value: completed,
            icon: FiCheckCircle,
            bgColor: 'bg-green-50',
            textColor: 'text-green-600',
            iconColor: 'text-green-500'
        },
        {
            title: 'In Progress',
            value: inProgress,
            icon: FiClock,
            bgColor: 'bg-blue-50',
            textColor: 'text-blue-600',
            iconColor: 'text-blue-500'
        },
        {
            title: 'Pending',
            value: pending,
            icon: FiAlertCircle,
            bgColor: 'bg-yellow-50',
            textColor: 'text-yellow-600',
            iconColor: 'text-yellow-500'
        }
    ]

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, index) => (
                <div key={index} className={`${stat.bgColor} rounded-xl p-4 hover:shadow-md transition-all duration-200`}>
                    <div className="flex items-center justify-between mb-2">
                        <stat.icon className={`${stat.iconColor} text-2xl`} />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600 mt-1">{stat.title}</div>
                </div>
            ))}
        </div>
    )
}

export default TaskStats
