/* eslint-disable @typescript-eslint/no-var-requires */

import { Product } from 'src/database/entity/product';
import { User } from 'src/database/entity/user';
import { Video } from 'src/database/entity/video';
import { DataSourceOptions } from 'typeorm';

require('dotenv').config();

const ormconfig: DataSourceOptions = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  entities: [
    User,
    Video,
    Product
  ],
  logging: ['error'],
  ssl: false,
  extra: {
    max: 10,
    connectionTimeoutMillis: 10000,
  },
  synchronize: true,
};

export default ormconfig;
