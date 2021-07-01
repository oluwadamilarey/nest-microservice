import { Body, Controller, Get, Post } from '@nestjs/common';
import { Product } from './product.entity';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  all() {
    return this.productService.all();
  }

  @Post()
  create(@Body('title') title: string, @Body('image') image: string) {
    return this.productService.create({
      title,
      image,
    });
  }
}
