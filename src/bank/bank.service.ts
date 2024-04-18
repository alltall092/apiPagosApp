import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Bank } from 'src/entity/bank.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BankService {

    constructor(
        @InjectRepository(Bank)
        private bankRepository: Repository<Bank>,
      ) {}
    
      async findAll(): Promise<Bank[]> {
        return this.bankRepository.find();
      }
    
      async findById(id: number): Promise<Bank> {
        return this.bankRepository.findOne({where:{id}});
      }
    
      async create(bankData: Partial<Bank>): Promise<Bank> {
        const bank = this.bankRepository.create(bankData);
        return this.bankRepository.save(bank);
      }
    
      async createOrUpdate(userId:number,bankData: Partial<Bank>): Promise<Bank> {
        const id=userId;
        const existingBank = await this.bankRepository.findOne({ where:{id }});
    
        if (existingBank) {
          // Si el banco existe, actualiza los datos
          const updatedBank = Object.assign(existingBank, bankData);
          return this.bankRepository.save(updatedBank);
        } else {
          // Si el banco no existe, crea uno nuevo
          const newBank = this.bankRepository.create(bankData);
          return this.bankRepository.save(newBank);
        }
      }
    
      async delete(id: number): Promise<void> {
        await this.bankRepository.delete(id);
      }
}
