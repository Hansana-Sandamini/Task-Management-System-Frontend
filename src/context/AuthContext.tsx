import { createContext, useState, useEffect } from "react"

interface User {
    _id: string
    name: string
    email: string
}

interface AuthContextType {
    isAuthenticated: boolean
    user: User | null
    login: (token: string, refresh: string, userData: User) => void
    logout: () => void
}

export const AuthContext = createContext<AuthContextType>({
    isAuthenticated: false,
    user: null,
    login: () => {},
    logout: () => {}
})

export const AuthProvider = ({ children }: any) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [user, setUser] = useState<User | null>(null)

    useEffect(() => {
        const token = localStorage.getItem("accessToken")
        const userData = localStorage.getItem("user")
        if (token && userData) {
            setIsAuthenticated(true)
            setUser(JSON.parse(userData))
        }
    }, [])

    const login = (token: string, refresh: string, userData: User) => {
        localStorage.setItem("accessToken", token)
        localStorage.setItem("refreshToken", refresh)
        localStorage.setItem("user", JSON.stringify(userData))
        setIsAuthenticated(true)
        setUser(userData)
    }

    const logout = () => {
        localStorage.clear()
        setIsAuthenticated(false)
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}
