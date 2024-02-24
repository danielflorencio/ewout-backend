import { IsEmail, IsEnum, IsNotEmpty, IsString } from "class-validator";
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

    @IsEnum(UserRolesArray, {
        message: 'Valid role required'
    })
    role: UserRoleType;
}