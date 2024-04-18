import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SyncLog } from '../entity/SyncLog.entity';
import { Repository } from 'typeorm';
import { CreateSyncLogDto } from 'src/createsynclogdto/createsynclogdto';

@Injectable()
export class SynclogService {
    constructor(@InjectRepository(SyncLog)
        private repository:Repository<SyncLog>
    ){}

getsynclog():Promise<SyncLog[]>{

    return this.repository.find();

}
postsynclog(datos:CreateSyncLogDto){
const datosynclog=this.repository.create(datos);
return this.repository.save(datosynclog);

}
}

