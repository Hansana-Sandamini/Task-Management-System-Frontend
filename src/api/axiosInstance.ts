import axios from "axios"

const api = axios.create({
    baseURL: "http://localhost:5000",
    withCredentials: false
})

// Attach access token automatically
api.interceptors.request.use((config) => {
    const token = localStorage.getItem("accessToken")
    if (token) config.headers.Authorization = `Bearer ${token}`
    return config
})

// Attach access token automatically
api.interceptors.request.use((config) => {
    const token = localStorage.getItem("accessToken")
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    console.log('Request:', config.method, config.url, 'Token:', !!token)
    return config
}, (error) => {
    return Promise.reject(error)
})

// Response interceptor for error handling
api.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        console.error('API Error:', error.response?.status, error.response?.data)
        
        // Handle 401 - Unauthorized
        if (error.response?.status === 401) {
            localStorage.removeItem('accessToken')
            localStorage.removeItem('refreshToken')
            localStorage.removeItem('user')
            window.location.href = '/login'
        }
        
        return Promise.reject(error)
    }
)

export default api
