import { Controller } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { Product } from "src/database/entity/product";
import { BaseController } from "../base/base.controller";
import { ProductService } from "./product.service";

@ApiTags('Produtos')
@Controller('produtos')
export class ProductController extends BaseController<Product> {
  constructor(private readonly productService: ProductService) {
    super(productService);
  }
}