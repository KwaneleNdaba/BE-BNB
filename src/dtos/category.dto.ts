import {isString , IsNotEmpty, IsHexColor, IsString} from "class-validator"

export class CreateCategoryDto{
    @IsString()
    @IsNotEmpty()
    public title : string;

    @IsString()
    @IsNotEmpty()
    public desc : string 

    @IsString()
    @IsNotEmpty()
    public img : string 

    @IsString()
    @IsNotEmpty()
    public slug : string;
}