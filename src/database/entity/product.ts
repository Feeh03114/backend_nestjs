import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity } from 'typeorm';
import { Base } from './base.entity';

@Entity({ name: 'product' })
export class Product extends Base {

  @ApiProperty({ description: 'name', default: '', type: 'varchar' })
  @Column({ name: 'name', type: 'varchar', length: 100 })
  name: string;

  @ApiProperty({ description: 'description', default: '', type: 'varchar' })
  @Column({ name: 'description', type: 'varchar', length: 400 })
  description: string;

  @ApiProperty({ description: 'price', default: 0, type: 'float' })
  @Column({ name: 'price', type: 'float', default: 0 })
  price: number;
}
