import { Body, Controller, Get, Post } from '@nestjs/common';
import { AportacionService } from './aportacion.service';
import { Aportacion } from 'src/entity/aportaciones.entity';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Aportacion')
@Controller('aportacion')
export class AportacionController {
    constructor(
        
        private readonly servi:AportacionService
      ) {}
      @Post('add')
      async createAportacion(@Body() data: { idEnviado: string }) {
        const { idEnviado } = data;
        console.log(idEnviado);
    
        const aportacion = await this.servi.createAportacion(idEnviado);
    
        return { message: 'Aportacion creada exitosamente', aportacion };
      }
      @Get()
      async getAllBank():Promise<Aportacion[]>{
    
try {
  return await this.servi.getAllBank();
} catch (error) {
  console.log('no cargan los datos')
}
        

      }


    }