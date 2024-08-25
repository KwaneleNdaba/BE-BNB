import { IsString, IsNotEmpty, IsNumber, IsBoolean, IsArray, IsOptional, IsDateString, Min, Max } from 'class-validator';

export class CreateReservationDto {
  @IsString()
  @IsNotEmpty()
  public userId: string;

  @IsString()
  @IsNotEmpty()
  public propertyId: string;

  @IsDateString()
  @IsNotEmpty()
  public checkInDate: string;

  @IsDateString()
  @IsNotEmpty()
  public checkOutDate: string;

  @IsNumber()
  @Min(1)
  public guests: number;

  @IsNumber()
  @IsOptional()
  public totalCost: number;

  @IsBoolean()
  @IsOptional()
  public isPaid: boolean;

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  public amenities: string[];
}

export class UpdateReservationDto {
  @IsDateString()
  @IsOptional()
  public checkInDate?: string;

  @IsDateString()
  @IsOptional()
  public checkOutDate?: string;

  @IsNumber()
  @Min(1)
  @IsOptional()
  public guests?: number;

  @IsNumber()
  @IsOptional()
  public totalCost?: number;

  @IsBoolean()
  @IsOptional()
  public isPaid?: boolean;

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  public amenities?: string[];
}
