import { Injectable } from '@nestjs/common';
import { ObjectLiteral, Repository } from 'typeorm';

@Injectable()
export class BaseService<T extends ObjectLiteral> {
  constructor(private readonly repository: Repository<T>) {}

  async findAll(): Promise<T[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<T|null> {
    const where:any = { id };
    return this.repository.findOne({
      where,
    });
  }

  async create(data: any): Promise<T> {
    return this.repository.save(data);
  }

  async update(id: number, data: any): Promise<void> {
    await this.repository.update(id, data);
  }

    async delete(id: number): Promise<void> {
      const data = await this.findOne(id);
      await this.repository.delete(id);
    }
}
