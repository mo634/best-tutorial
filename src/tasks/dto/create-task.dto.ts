import { IsNotEmpty } from "class-validator"

// define dto class 
export class CreateTaskDto {
    // define needed properities 
       // ensure incomming field not empty
       @IsNotEmpty() 
       title:string
       @IsNotEmpty() 
    description : string
}