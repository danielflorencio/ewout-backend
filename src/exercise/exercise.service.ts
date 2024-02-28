import { Injectable, Request } from '@nestjs/common';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { UpdateExerciseDto } from './dto/update-exercise.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class ExerciseService {

  constructor(
    private readonly databaseService: DatabaseService
  ){}

  create(createExerciseDto: CreateExerciseDto, userEmail: string) {
    return 'This action adds a new exercise';
  }

  findAll() {
    return `This action returns all exercise`;
  }

  findOne(id: number) {
    return `This action returns a #${id} exercise`;
  }

  update(id: number, updateExerciseDto: UpdateExerciseDto) {
    return `This action updates a #${id} exercise`;
  }

  remove(id: number) {
    return `This action removes a #${id} exercise`;
  }
}
