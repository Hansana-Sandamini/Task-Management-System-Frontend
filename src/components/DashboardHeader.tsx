import { FiLogOut } from 'react-icons/fi'

interface DashboardHeaderProps {
    userName: string
    onLogout: () => void
}

const DashboardHeader = ({ userName, onLogout }: DashboardHeaderProps) => {
    const firstName = (name: string) => name.split(' ')[0]
    return (
        <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-lg">T</span>
                        </div>
                        <h1 className="text-xl font-bold text-gray-900">TaskMaster</h1>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="text-sm text-gray-600 hidden sm:inline">
                            Welcome, {firstName(userName)}
                        </span>
                        <button
                            onClick={onLogout}
                            className="flex items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition"
                        >
                            <FiLogOut />
                            <span className="hidden sm:inline">Logout</span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default DashboardHeader
