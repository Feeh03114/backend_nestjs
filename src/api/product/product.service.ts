import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Product } from "src/database/entity/product";
import { Repository } from "typeorm";
import { BaseService } from "../base/base.service";

@Injectable()
export class ProductService extends BaseService<Product>{
    constructor(
        @InjectRepository(Product)
        private productRepository: Repository<Product>,
    ) {
        super(productRepository);
    }
}