import { createContext, useState, useEffect } from "react"

interface AuthContextType {
    isAuthenticated: boolean
    login: (token: string, refresh: string) => void
    logout: () => void
}

export const AuthContext = createContext<AuthContextType>({
    isAuthenticated: false,
    login: () => {},
    logout: () => {}
})

export const AuthProvider = ({ children }: any) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem("accessToken")
        setIsAuthenticated(!!token)
    }, [])

    const login = (token: string, refresh: string) => {
        localStorage.setItem("accessToken", token)
        localStorage.setItem("refreshToken", refresh)
        setIsAuthenticated(true)
    }

    const logout = () => {
        localStorage.clear()
        setIsAuthenticated(false)
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}
