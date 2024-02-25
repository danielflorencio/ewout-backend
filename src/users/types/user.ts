import { UserRoleType } from "./roles"

export type UserType = {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    role: UserRoleType
}