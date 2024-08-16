import {Service} from "typedi";
import { Product } from "@/interfaces/product.interface";
import { productModel } from "@/models/product.model";
import { CreateProductDto } from "@/dtos/product.dto";
import { HttpException } from "@/exceptions/HttpException";
import { CreateCategoryDto } from "@/dtos/category.dto";
import { title } from "process";

@Service()

export class ProductService {

    public async findAllProducts () : Promise<Product[]>{
        const products : Product[] = await productModel.find();
        return products
    }

     public async createProduct (productData : CreateCategoryDto) : Promise<Product> {
        const existingProduct = await productModel.findOne({title : productData.title});
        if(existingProduct){
            throw new HttpException(409, `Product with title ${productData.title} already exist`);
        }
        const createdProduct = await productModel.create(productData);
        return createdProduct;
     }

     

}