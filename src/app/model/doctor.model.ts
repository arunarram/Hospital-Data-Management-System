import { Gender } from "./Gender.enum"

export interface Doctor {
    id: number
    name: string
    age: number
    gender: Gender
    specialist: string
    numberOfPatientsVisited: number
}

