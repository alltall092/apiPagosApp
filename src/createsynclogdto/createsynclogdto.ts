import { IsNotEmpty, IsString, IsDate } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateSyncLogDto {
    @ApiProperty()
  @IsNotEmpty()
  ultimaSincronizacion: Date;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  estadoSincronizacion: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  detallesSincronizacion: string;
  @ApiProperty()
  @IsNotEmpty()
  userId: number; // Este campo representa el ID del usuario asociado al registro de sincronización
}
