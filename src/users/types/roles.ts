export enum EUserRoles {
    FREE = 'FREE',
    ADMIN = 'ADMIN'
}

export type UserRoleType = 
    EUserRoles.FREE | 
    // 'BRONZE' | 
    // 'SILVER' | 
    // 'GOLD' | 
    // 'PLATINUM' | 
    // 'DIAMOND' | 
    EUserRoles.ADMIN

export const UserRolesArray = [
    EUserRoles.FREE,
    EUserRoles.ADMIN
]
