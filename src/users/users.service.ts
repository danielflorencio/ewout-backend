import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { NotFoundException } from '@nestjs/common';
import { SafeUserSelect, SafeUserType } from './types/user';
import { UserRoleType } from './types/roles';
import { DatabaseService } from 'src/database/database.service';
import { ConflictException } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { genSalt, hash } from 'bcrypt';

@Injectable()
export class UsersService {

    constructor(private readonly databaseService: DatabaseService) { }

    async findAll(role?: UserRoleType): Promise<SafeUserType[]> {

        let users: SafeUserType[] | Promise<SafeUserType[]> = [];

        if (role) {
            users = await this.databaseService.user.findMany({
                select: SafeUserSelect,
                where: {
                    role: role
                }
            }) as SafeUserType[]
        } else {
            users = this.databaseService.user.findMany({
                select: SafeUserSelect
            }) as Promise<SafeUserType[]>
        }

        if(!users){
            throw new NotFoundException(`No users found.`);
        } else {
            return users;
        }

    }

    findOneById(id: number) {
        const user = this.databaseService.user.findUnique({ where: { id } })
        if (!user) throw new NotFoundException('User Not Found')
        return user
    }

    findOneByEmail(email: string) {
        const user = this.databaseService.user.findUnique({ where: { email } })
        return user;
    }


    async create(createUserDto: CreateUserDto) {
        let newUser;
        try{
            const salt = await genSalt();
            const hashedPassword = await hash(createUserDto.password, salt);
            newUser = this.databaseService.user.create({
                data: {...createUserDto, password: hashedPassword}
            })
        } catch(error){
            if (error instanceof PrismaClientKnownRequestError) {
                if (error.code === 'P2002') {
                  throw new ConflictException('A user with this email already exists');
                }
            }
        }
        return newUser
    }

}
