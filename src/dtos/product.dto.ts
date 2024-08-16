import {IsString , IsNumber , IsNotEmpty , IsBoolean , IsOptional} from "class-validator"

export class CreateProductDto{
    @IsString()
    @IsNotEmpty()
    public title : string;

    @IsString()
    @IsNotEmpty()
    public desc : string;

    @IsOptional()
    @IsString()
    public img : string;

    @IsNumber()
    @IsNotEmpty()
    public price : number;

    @IsBoolean()
    @IsOptional()
    public isFeatured : Boolean;

    @IsOptional()
    public options : any[];

    @IsString()
    @IsNotEmpty()
    public catSlug : string 

}