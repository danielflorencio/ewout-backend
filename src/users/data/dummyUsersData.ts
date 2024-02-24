import { EUserRoles } from "../types/roles";
import { UserType } from "../types/user";

export const dummyUsersData: UserType[] = [
    {
        "id": 1,
        "firstName": "Leanne",
        "lastName": "Graham",
        "email": "Sincere@april.biz",
        "role": EUserRoles.ADMIN,
    },
    {
        "id": 2,
        "firstName": "Ervin",
        "lastName": "Howell",
        "email": "Shanna@melissa.tv",
        "role": EUserRoles.FREE,
    },
    {
        "id": 3,
        "firstName": "Clementine",
        "lastName": "Bauch",
        "email": "Nathan@yesenia.net",
        "role": EUserRoles.FREE,
    },
    {
        "id": 4,
        "firstName": "Patricia",
        "lastName": "Lebsack",
        "email": "Julianne.OConner@kory.org",
        "role": EUserRoles.FREE,
    },
    {
        "id": 5,
        "firstName": "Chelsey",
        "lastName": "Dietrich",
        "email": "Lucio_Hettinger@annie.ca",
        "role": EUserRoles.FREE,
    }
]