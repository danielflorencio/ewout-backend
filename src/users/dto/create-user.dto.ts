import { IsEmail, IsEnum, IsNotEmpty, IsString, IsStrongPassword } from "class-validator";
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

    @IsString()
    @IsNotEmpty()
    @IsStrongPassword({
        minLength: 8,
        minUppercase: 0,
        minNumbers: 0,
        minSymbols: 0,
        minLowercase: 0
    })
    password: string;

    @IsEnum(UserRolesArray, {
        message: 'Valid role required'
    })
    role: UserRoleType;
}