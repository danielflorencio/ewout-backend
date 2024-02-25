import { EUserRoles } from "../types/roles";
import { UserType } from "../types/user";

export const dummyUsersData: UserType[] = [
    {
        "id": 1,
        "firstName": "Leanne",
        "lastName": "Graham",
        "email": "sincere@april.biz",
        "password": "sincere",
        "role": EUserRoles.ADMIN,
    },
    {
        "id": 2,
        "firstName": "Ervin",
        "lastName": "Howell",
        "email": "shanna@melissa.tv",
        "password": "shanna",
        "role": EUserRoles.FREE,
    },
    {
        "id": 3,
        "firstName": "Clementine",
        "lastName": "Bauch",
        "email": "nathan@yesenia.net",
        "password": "nathan",
        "role": EUserRoles.FREE,
    },
    {
        "id": 4,
        "firstName": "Patricia",
        "lastName": "Lebsack",
        "email": "julianne.OConner@kory.org",
        "password": 'julianne',
        "role": EUserRoles.FREE,
    },
    {
        "id": 5,
        "firstName": "Daniel",
        "lastName": "Florencio",
        "email": "daniel@mail.com",
        "password": "daniel",
        "role": EUserRoles.FREE,
    }
]