import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Product } from "src/database/entity/product";
import { ProductController } from "./product.controller";
import { ProductService } from "./product.service";

@Module({
    controllers: [ProductController],
    imports: [TypeOrmModule.forFeature([Product])],
    providers: [ProductService],
})
export class ProductModule {}