"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CategoryRoute", {
    enumerable: true,
    get: function() {
        return CategoryRoute;
    }
});
const _express = require("express");
const _categorycontroller = require("../controllers/category.controller");
const _categorydto = require("../dtos/category.dto");
const _validationmiddleware = require("../middlewares/validation.middleware");
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
let CategoryRoute = class CategoryRoute {
    initializeRoutes() {
        this.router.post(`${this.path}`, (0, _validationmiddleware.ValidationMiddleware)(_categorydto.CreateCategoryDto), this.categoryController.createCategory);
        this.router.get(`${this.path}`, this.categoryController.getCategories);
        this.router.delete(`${this.path}`, this.categoryController.deleteCategory);
    }
    constructor(){
        _define_property(this, "path", '/categories');
        _define_property(this, "router", (0, _express.Router)());
        _define_property(this, "categoryController", new _categorycontroller.CategoryController());
        this.initializeRoutes();
    }
};

//# sourceMappingURL=category.route.js.map