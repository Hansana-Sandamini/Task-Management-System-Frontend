import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import api from '../api/axiosInstance'
import toast from 'react-hot-toast'

const Register = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        
        if (formData.password !== formData.confirmPassword) {
            toast.error('Passwords do not match')
            return
        }
        
        if (formData.password.length < 6) {
            toast.error('Password must be at least 6 characters')
            return
        }
        
        setLoading(true)
        
        try {
            await api.post('/auth/register', {
                firstname: formData.firstName,
                lastname: formData.lastName,
                email: formData.email,
                password: formData.password
            })
            
            toast.success('Registration successful! Please login.')
            navigate('/login')
        } catch (error: any) {
            toast.error(error.response?.data?.message || 'Registration failed')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-700 to-slate-900">
            <div className="bg-white p-8 rounded-xl shadow-2xl max-w-md w-full">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Register</h2>
                
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                First Name
                            </label>
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-slate-600"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Last Name
                            </label>
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-slate-600"
                                required
                            />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Email Address
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-slate-600"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-slate-600"
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-slate-600"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-slate-700 text-white font-bold py-2 px-4 rounded-lg hover:bg-slate-800 transition duration-300 disabled:opacity-50"
                    >
                        {loading ? 'Creating account...' : 'Register'}
                    </button>
                </form>

                <p className="text-center text-gray-600 mt-4">
                    Already have an account?{' '}
                    <Link to="/login" className="text-slate-600 hover:text-slate-700">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default Register
