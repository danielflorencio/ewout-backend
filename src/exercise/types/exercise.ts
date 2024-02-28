import { ExerciseSet } from "./set"

export type Exercise = {
    id?: number,
    name: string,
    duration?: string,
    sets?: ExerciseSet[],
    totalRepetitions?: number,
    volume?: number,
    createdAt?: Date | string,
    updatedAt?: Date | string,
    ownerId?: number,
    ownerEmail?: string,
    workoutId?: number
}

