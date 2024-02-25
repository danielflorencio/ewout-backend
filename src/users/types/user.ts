import { UserRoleType } from "./roles"

export type UserType = {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    role: UserRoleType
}

export type SafeUserType = Omit<UserType, 'password'>

export const SafeUserSelect = {
    id: true,
    email: true, 
    role: true,
    firstName: true,
    lastName: true,
    createdAt: true,
    updatedAt: true
}