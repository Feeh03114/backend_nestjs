import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormconfig from 'ormconfig';
import { ProductModule } from './api/product/product.module';
import { UserModule } from './api/user/user.module';
import { VideoModule } from './api/videos/video.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      useFactory: () => ormconfig,
    }),
    ProductModule,
    VideoModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
