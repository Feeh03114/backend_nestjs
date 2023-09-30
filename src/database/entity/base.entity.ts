import {
  PrimaryGeneratedColumn
} from 'typeorm';

export class Base {
  @PrimaryGeneratedColumn('increment')
  id: number;
}
