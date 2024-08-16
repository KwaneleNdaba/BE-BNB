"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CategoryService", {
    enumerable: true,
    get: function() {
        return CategoryService;
    }
});
const _typedi = require("typedi");
const _categorymodel = require("../models/category.model");
const _HttpException = require("../exceptions/HttpException");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let CategoryService = class CategoryService {
    async findAllCategories() {
        const categories = await _categorymodel.CategoryModel.find();
        return categories;
    }
    async findCategoryById(categoryId) {
        const category = await _categorymodel.CategoryModel.findOne({
            _id: categoryId
        });
        if (!category) {
            throw new _HttpException.HttpException(404, "Category not found");
        }
        return category;
    }
    async createCategory(categoryData) {
        const existingCategory = await _categorymodel.CategoryModel.findOne({
            slug: categoryData.slug
        });
        if (existingCategory) {
            throw new _HttpException.HttpException(409, `Category with slug ${categoryData.slug} already exists`);
        }
        const createdCategory = await _categorymodel.CategoryModel.create(categoryData);
        return createdCategory;
    }
    async updateCategory(categoryId, categoryData) {
        const existingCategory = await _categorymodel.CategoryModel.findOne({
            slug: categoryData.slug
        });
        if (existingCategory && existingCategory._id !== categoryId) {
            throw new _HttpException.HttpException(409, `Category with slug ${categoryData.slug} already exists`);
        }
        const updatedCategory = await _categorymodel.CategoryModel.findByIdAndUpdate(categoryId, categoryData, {
            new: true
        });
        if (!updatedCategory) {
            throw new _HttpException.HttpException(404, "Category not found");
        }
        return updatedCategory;
    }
    async deleteCategory(categoryId) {
        const deletedCategory = await _categorymodel.CategoryModel.findOneAndDelete({
            _id: categoryId
        });
        if (!deletedCategory) {
            throw new _HttpException.HttpException(404, "Category not found");
        }
        return deletedCategory;
    }
};
CategoryService = _ts_decorate([
    (0, _typedi.Service)()
], CategoryService);

//# sourceMappingURL=category.service.js.map