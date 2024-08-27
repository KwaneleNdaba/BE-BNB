import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsBoolean,
  IsArray,
  IsOptional,
  IsDateString,
  Min,
} from 'class-validator';

export class CreateReservationDto {
  @IsString()
  @IsNotEmpty()
  public host_id: string;  // Corresponds to host_id in IReservation

  @IsString()
  @IsNotEmpty()
  public type: string;  // Property type (e.g., Apartment, House)

  @IsString()
  @IsNotEmpty()
  public location: string;

  @IsNumber()
  @Min(1)
  public guests: number;

  @IsNumber()
  @IsNotEmpty()
  public bedrooms: number;

  @IsNumber()
  @IsNotEmpty()
  public bathrooms: number;

  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty()
  public amenities: string[];

  @IsNumber()
  @IsOptional()
  public rating?: number;

  @IsNumber()
  @IsOptional()
  public reviews?: number;

  @IsNumber()
  @IsNotEmpty()
  public price: number;

  @IsString()
  @IsNotEmpty()
  public title: string;

  @IsString()
  @IsNotEmpty()
  public host: string;  // Corresponds to the name of the host (user creating the reservation)

  @IsNumber()
  @IsOptional()
  public weeklyDiscount?: number;

  @IsNumber()
  @IsOptional()
  public cleaningFee?: number;

  @IsNumber()
  @IsOptional()
  public serviceFee?: number;

  @IsNumber()
  @IsOptional()
  public occupancyTaxes?: number;

  @IsBoolean()
  @IsOptional()
  public enhancedCleaning?: boolean;

  @IsBoolean()
  @IsOptional()
  public selfCheckIn?: boolean;

  @IsString()
  @IsOptional()
  public description?: string;
}

export class UpdateReservationDto {
  @IsNumber()
  @Min(1)
  @IsOptional()
  public guests?: number;

  @IsNumber()
  @IsOptional()
  public bedrooms?: number;

  @IsNumber()
  @IsOptional()
  public bathrooms?: number;

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  public amenities?: string[];

  @IsNumber()
  @IsOptional()
  public rating?: number;

  @IsNumber()
  @IsOptional()
  public reviews?: number;

  @IsNumber()
  @IsOptional()
  public price?: number;

  @IsString()
  @IsOptional()
  public title?: string;

  @IsNumber()
  @IsOptional()
  public weeklyDiscount?: number;

  @IsNumber()
  @IsOptional()
  public cleaningFee?: number;

  @IsNumber()
  @IsOptional()
  public serviceFee?: number;

  @IsNumber()
  @IsOptional()
  public occupancyTaxes?: number;

  @IsBoolean()
  @IsOptional()
  public enhancedCleaning?: boolean;

  @IsBoolean()
  @IsOptional()
  public selfCheckIn?: boolean;

  @IsString()
  @IsOptional()
  public description?: string;
}
