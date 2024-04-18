import { SynclogService } from './synclog.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { SyncLog } from '../entity/SyncLog.entity';
import { ApiTags } from '@nestjs/swagger';
import { CreateSyncLogDto } from 'src/createsynclogdto/createsynclogdto';
@ApiTags('Synclogs')
@Controller('synclog')
export class SynclogController {
    constructor(private servi:SynclogService){}
@Get()
    async getsynclog():Promise<SyncLog[]>{
try {
    const synclog= await this.servi.getsynclog();
    return synclog;
} catch (error) {
    console.log('error al cargar los datos');
}

}
@Post()
async postsynclog(@Body() datos:CreateSyncLogDto){
try {
    const synclog=await this.servi.postsynclog(datos);
    return synclog;
} catch (error) {
    console.log('error al insertar los datos')
}

}




}
