import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity } from 'typeorm';
import { Base } from './base.entity';

@Entity({ name: 'user' })
export class User extends Base {

  @ApiProperty({ description: 'name' })
  @Column({ name: 'name', type: 'varchar', length: 100 })
  name: string;

  @ApiProperty({ description: 'description' })
  @Column({ name: 'email', type: 'varchar', length: 100 })
  email: string;
}
