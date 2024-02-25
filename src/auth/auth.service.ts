import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { UserType } from 'src/users/types/user';
import { JwtService } from '@nestjs/jwt';
import { SignInDto } from './dto/sign-in.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class AuthService {

  constructor(
    private readonly databaseService: DatabaseService,
    private jwtService: JwtService
  ) {}

    
  async signIn({email, password}: SignInDto): Promise<{ access_token: string }> {
    const user: UserType = await this.databaseService.user.findUnique({
      where: {
        email
      }
    }) as UserType;
    if (user?.password !== password) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.id, userEmail: user.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };

  }
  
  create(createAuthDto: CreateAuthDto) {
    return 'This action adds a new auth';
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
