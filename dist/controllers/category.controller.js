"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CategoryController", {
    enumerable: true,
    get: function() {
        return CategoryController;
    }
});
const _typedi = require("typedi");
const _categoryservice = require("../services/category.service");
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
let CategoryController = class CategoryController {
    constructor(){
        _define_property(this, "categoryService", _typedi.Container.get(_categoryservice.CategoryService));
        _define_property(this, "getCategories", async (req, res, next)=>{
            try {
                const categories = await this.categoryService.findAllCategories();
                res.status(200).json({
                    data: categories,
                    message: 'All categories retrieved successfully'
                });
            } catch (error) {
                next(error);
            }
        });
        _define_property(this, "getCategoryById", async (req, res, next)=>{
            try {
                const categoryId = req.params.id;
                const category = await this.categoryService.findCategoryById(categoryId);
                res.status(200).json({
                    data: category,
                    message: 'Category retrieved successfully'
                });
            } catch (error) {
                next(error);
            }
        });
        _define_property(this, "createCategory", async (req, res, next)=>{
            try {
                const categoryData = req.body;
                const newCategory = await this.categoryService.createCategory(categoryData);
                res.status(201).json({
                    data: newCategory,
                    message: 'Category created successfully'
                });
            } catch (error) {
                next(error);
            }
        });
        _define_property(this, "updateCategory", async (req, res, next)=>{
            try {
                const categoryId = req.params.id;
                const categoryData = req.body;
                const updatedCategory = await this.categoryService.updateCategory(categoryId, categoryData);
                res.status(200).json({
                    data: updatedCategory,
                    message: 'Category updated successfully'
                });
            } catch (error) {
                next(error);
            }
        });
        _define_property(this, "deleteCategory", async (req, res, next)=>{
            try {
                const categoryId = req.params.id;
                const deletedCategory = await this.categoryService.deleteCategory(categoryId);
                res.status(200).json({
                    data: deletedCategory,
                    message: 'Category deleted successfully'
                });
            } catch (error) {
                next(error);
            }
        });
    }
};

//# sourceMappingURL=category.controller.js.map