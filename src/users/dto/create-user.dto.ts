import { IsEmail, IsEnum, IsNotEmpty, IsString, isNotEmpty, isString, isStrongPassword } from "class-validator";
import { UserRoleType, UserRolesArray } from "../types/roles";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    firstName: string;

    @IsString()
    @IsNotEmpty()
    lastName: string;

    @IsEmail()
    email: string;

    password: string;

    @IsEnum(UserRolesArray, {
        message: 'Valid role required'
    })
    role: UserRoleType;
}