import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { NotFoundException } from '@nestjs/common';
import { SafeUserSelect, SafeUserType, UserType } from './types/user';
import { UserRoleType } from './types/roles';
import { dummyUsersData } from './data/dummyUsersData';
import { DatabaseService } from 'src/database/database.service';
import { ConflictException } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';


@Injectable()
export class UsersService {
    // private users: UserType[] = dummyUsersData;

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

    create(createUserDto: CreateUserDto) {
        let newUser;
        try{
            newUser = this.databaseService.user.create({
                data: createUserDto
            })
        } catch(error){
            if (error instanceof PrismaClientKnownRequestError) {
                if (error.code === 'P2002') {
                  throw new ConflictException('User with this email already exists');
                }
            }
        }
        return newUser
    }

    // update(id: number, updateUserDto: UpdateUserDto) {
    //     this.users = this.users.map(user => {
    //         if (user.id === id) {
    //             return { ...user, ...updateUserDto }
    //         }
    //         return user
    //     })

    //     return this.findOneById(id)
    // }

    // delete(id: number) {
    //     const removedUser = this.findOneById(id)

    //     this.users = this.users.filter(user => user.id !== id)

    //     return removedUser
    // }

}
