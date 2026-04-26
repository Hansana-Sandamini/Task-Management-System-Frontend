export const TaskStatus = {
    PENDING: "PENDING",
    IN_PROGRESS: "IN_PROGRESS",
    COMPLETED: "COMPLETED"
} as const

export type TaskStatus = typeof TaskStatus[keyof typeof TaskStatus]

export interface ITask {
    _id: string
    userId: string
    title: string
    description?: string
    status: TaskStatus
    createdAt: string
    updatedAt: string
}
