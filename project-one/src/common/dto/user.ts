import { IsInt, IsString } from "class-validator";

export class UserDTO {
    id?: number;

    @IsString()
    name: string;

    @IsInt()
    age: number;

    @IsString()
    email: string;
}