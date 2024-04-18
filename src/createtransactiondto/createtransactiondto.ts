import { IsNotEmpty, IsNumber, IsString, IsDate } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateTransactionDto {
    @ApiProperty()
  @IsNotEmpty()
  @IsString()
  tipoTransaccion: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  monto: number;
  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  fechaTransaccion: Date;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  descripcion: string;
  @ApiProperty()
  @IsNotEmpty()
  paymentId: number; // Este campo representa el ID del pago asociado a la transacción
}

