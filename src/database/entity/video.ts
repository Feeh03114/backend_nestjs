import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity } from 'typeorm';
import { Base } from './base.entity';

@Entity({ name: 'video' })
export class Video extends Base {

  @ApiProperty({ description: 'name' })
  @Column({ name: 'name', type: 'varchar', length: 100 })
  name: string;

  @ApiProperty({ description: 'description' })
  @Column({ name: 'url', type: 'varchar', length: 100 })
  url: string;
}
