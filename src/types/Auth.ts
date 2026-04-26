import type { IUser } from "./User"

export interface LoginRequest {
    email: string
    password: string
}

export interface LoginResponse {
    message: string
    accessToken: string
    refreshToken: string
    user: IUser
}

export interface RegisterRequest {
    firstname: string
    lastname: string
    email: string
    password: string
}

export interface RegisterResponse {
    message: string
    data: {
        email: string
        id: string
    }
}

export interface RefreshTokenResponse {
    accessToken: string
}
