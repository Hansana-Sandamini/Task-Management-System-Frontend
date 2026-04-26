import api from "./axiosInstance"
import { type ITask, TaskStatus } from "../types/Task"

export const getAllTasks = async (): Promise<ITask[]> => {
    const response = await api.get("/tasks")
    return response.data
}

export const getTaskById = async (id: string): Promise<ITask> => {
    const response = await api.get(`/tasks/${id}`)
    return response.data
}

export const createTask = async (data: {
    title: string
    description?: string
}): Promise<ITask> => {
    const response = await api.post("/tasks", data)
    return response.data
}

export const updateTask = async (
    id: string,
    data: {
        title?: string
        description?: string
        status?: TaskStatus
    }
): Promise<ITask> => {
    const response = await api.put(`/tasks/${id}`, data)
    return response.data
}

export const deleteTask = async (id: string): Promise<void> => {
    await api.delete(`/tasks/${id}`)
}
