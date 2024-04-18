import { IsNotEmpty, IsNumber, IsString, IsDate } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreatePaymentDto {
@ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  monto: number;
  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  fechaPago: Date;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  estadoPago: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  metodoPago: string;
  @ApiProperty()
  @IsNotEmpty()
  userId: number; // Este campo representa el ID del usuario asociado al pago
}
