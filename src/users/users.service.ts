import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { NotFoundException } from '@nestjs/common';
import { UserType } from './types/user';
import { UserRoleType } from './types/roles';
import { dummyUsersData } from './data/dummyUsersData';

@Injectable()
export class UsersService {
    private users: UserType[] = dummyUsersData;

    findAll(role?: UserRoleType) {
        if (role) {
            const rolesArray = this.users.filter(user => user.role === role)
            if (rolesArray.length === 0) throw new NotFoundException('User Role Not Found')
            return rolesArray
        }
        return this.users
    }

    findOneById(id: number) {
        const user = this.users.find(user => user.id === id)

        if (!user) throw new NotFoundException('User Not Found')
        // Do it using the user repository;

        return user
    }

    findOneByEmail(email: string) {
        const user = this.users.find(user => user.email === email)
        // Do it using the user repository;
        return user;
    }

    create(createUserDto: CreateUserDto) {
        const usersByHighestId = [...this.users].sort((a, b) => b.id - a.id)
        const newUser = {
            id: usersByHighestId[0].id + 1,
            ...createUserDto
        }
        this.users.push(newUser)
        return newUser
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
