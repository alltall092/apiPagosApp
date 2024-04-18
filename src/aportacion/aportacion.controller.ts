import { Body, Controller, Post } from '@nestjs/common';
import { AportacionService } from './aportacion.service';

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

    }