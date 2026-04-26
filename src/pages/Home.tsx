import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { FiLogIn, FiUserPlus, FiCheckSquare } from 'react-icons/fi'

const Home = () => {
    const navigate = useNavigate()
    const { isAuthenticated } = useContext(AuthContext)

    // If user is already logged in, redirect to dashboard
    React.useEffect(() => {
        if (isAuthenticated) {
            navigate('/dashboard')
        }
    }, [isAuthenticated, navigate])

    const handleLogin = () => {
        navigate('/login')
    }

    const handleRegister = () => {
        navigate('/register')
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 overflow-hidden">
                {/* Animated background shapes */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
                </div>

                <div className="relative z-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
                        <div className="text-center">
                            {/* Logo/Brand */}
                            <div className="flex items-center justify-center gap-3 mb-8">
                                <FiCheckSquare className="text-5xl text-white" />
                                <h1 className="text-4xl font-bold text-white">TaskMaster</h1>
                            </div>

                            {/* Main Heading */}
                            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6">
                                Manage Your Tasks
                                <br />
                                <span className="text-cyan-400">Effortlessly & Securely</span>
                            </h2>

                            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                                The intelligent task management system that helps you stay organized,
                                boost productivity, and achieve your goals faster.
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                                <button
                                    onClick={handleRegister}
                                    className="inline-flex items-center justify-center gap-2 px-8 py-3 text-lg font-semibold text-slate-800 bg-white rounded-full hover:bg-gray-100 hover:scale-105 transform transition-all duration-300 shadow-lg"
                                >
                                    <FiUserPlus className="text-xl" />
                                    Get Started Free
                                </button>
                                <button
                                    onClick={handleLogin}
                                    className="inline-flex items-center justify-center gap-2 px-8 py-3 text-lg font-semibold text-white bg-transparent border-2 border-white rounded-full hover:bg-white hover:text-slate-800 hover:scale-105 transform transition-all duration-300"
                                >
                                    <FiLogIn className="text-xl" />
                                    Sign In
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* How It Works Section */}
            <div className="py-12 bg-gray-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            How It <span className="text-slate-700">Works</span>
                        </h3>
                        <p className="text-xl text-gray-600">
                            Get started in three simple steps
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Step 1 */}
                        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-slate-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">
                                    1
                                </div>
                                <h4 className="text-xl font-semibold text-gray-900 mb-3">Create Account</h4>
                                <p className="text-gray-600">
                                    Sign up for free with your email and password
                                </p>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-slate-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">
                                    2
                                </div>
                                <h4 className="text-xl font-semibold text-gray-900 mb-3">Add Tasks</h4>
                                <p className="text-gray-600">
                                    Create, organize, and prioritize your tasks
                                </p>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-slate-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">
                                    3
                                </div>
                                <h4 className="text-xl font-semibold text-gray-900 mb-3">Stay Productive</h4>
                                <p className="text-gray-600">
                                    Track progress and achieve your goals
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-slate-900 text-white py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <div className="text-gray-200 text-xs">
                            © {new Date().getFullYear()} TaskMaster. All rights reserved.
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Home
