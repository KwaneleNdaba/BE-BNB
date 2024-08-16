import { Router } from 'express';
import { CategoryController } from '@controllers/category.controller';
import { CreateCategoryDto } from '@dtos/category.dto';
import { ValidationMiddleware } from '@middlewares/validation.middleware';

export class CategoryRoute {
  public path = '/categories';
  public router = Router();
  public categoryController = new CategoryController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}`, ValidationMiddleware(CreateCategoryDto), this.categoryController.createCategory);
    this.router.get(`${this.path}`, this.categoryController.getCategories)
    this.router.delete(`${this.path}`, this.categoryController.deleteCategory)
  }
}
