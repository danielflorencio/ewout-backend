import { Body, Controller, Delete, Get, Param, Patch, Post, Query, ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';

import { UserRoleType } from './types/roles';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { SkipAuth } from 'src/auth/utils/setMetadataDecorator';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) { }

    @SkipAuth()
    @Get() // GET /users or /users?role=value
    findAll(@Query('role') role?: UserRoleType) {
        return this.usersService.findAll(role)
    }

    @Get(':id') // GET /users/:id
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.findOneById(id)
    }

    @SkipAuth()
    @Post() // POST /users 
    create(@Body(ValidationPipe) createUserDto: CreateUserDto) {
        return this.usersService.create(createUserDto)
    }

    // @Patch(':id') // PATCH /users/:id
    // update(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe) updateUserDto: UpdateUserDto) {
    //     return this.usersService.update(id, updateUserDto)
    // }

    // @Delete(':id') // DELETE /users/:id
    // delete(@Param('id', ParseIntPipe) id: number) {
    //     return this.usersService.delete(id)
    // }

    @Post('/login')
    login(@Body('email') email: string, @Body('password') password: string) {
        // return this.usersService.login(email, password)
        return ''
    }

}
