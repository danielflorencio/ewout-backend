import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { NotFoundException } from '@nestjs/common';
import { SafeUserSelect, SafeUserType, UserType } from './types/user';
import { UserRoleType } from './types/roles';
import { dummyUsersData } from './data/dummyUsersData';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class UsersService {
    private users: UserType[] = dummyUsersData;

    constructor(private readonly databaseService: DatabaseService) { }


    findAll(role?: UserRoleType) {
        if (role) {
            const users = this.databaseService.user.findMany({
                select: SafeUserSelect,
                where: {
                    role: role
                }
            })
            if(!users){
                throw new NotFoundException(`No users with role ${role} found`);
            } 
            return users;
        }
        return this.databaseService.user.findMany();
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
        this.databaseService.user.create({
            data: createUserDto
        })
    }

    update(id: number, updateUserDto: UpdateUserDto) {
        this.users = this.users.map(user => {
            if (user.id === id) {
                return { ...user, ...updateUserDto }
            }
            return user
        })

        return this.findOneById(id)
    }

    delete(id: number) {
        const removedUser = this.findOneById(id)

        this.users = this.users.filter(user => user.id !== id)

        return removedUser
    }

}
