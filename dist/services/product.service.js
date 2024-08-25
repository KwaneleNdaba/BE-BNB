"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ProductService", {
    enumerable: true,
    get: function() {
        return ProductService;
    }
});
const _typedi = require("typedi");
const _productmodel = require("../models/product.model");
const _HttpException = require("../exceptions/HttpException");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let ProductService = class ProductService {
    async findAllProducts() {
        const products = await _productmodel.productModel.find();
        return products;
    }
    async createProduct(productData) {
        const existingProduct = await _productmodel.productModel.findOne({
            title: productData.title
        });
        if (existingProduct) {
            throw new _HttpException.HttpException(409, `Product with title ${productData.title} already exist`);
        }
        const createdProduct = await _productmodel.productModel.create(productData);
        return createdProduct;
    }
};
ProductService = _ts_decorate([
    (0, _typedi.Service)()
], ProductService);

//# sourceMappingURL=product.service.js.map