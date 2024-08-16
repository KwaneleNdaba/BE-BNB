import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';
import { Category } from '@interfaces/category.interface';
import { CategoryService } from '@services/category.service';
import { CreateCategoryDto } from '@dtos/category.dto';

export class CategoryController {
  public categoryService = Container.get(CategoryService);

  public getCategories = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const categories: Category[] = await this.categoryService.findAllCategories();
      res.status(200).json({ data: categories, message: 'All categories retrieved successfully', status: 200 });
    } catch (error) {
      next(error);
    }
  };

  public getCategoryById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const categoryId: string = req.params.id;
      const category: Category = await this.categoryService.findCategoryById(categoryId);
      res.status(200).json({ data: category, message: 'Category retrieved successfully' });
    } catch (error) {
      next(error);
    }
  };

  public createCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const categoryData: CreateCategoryDto = req.body;
      const newCategory: Category = await this.categoryService.createCategory(categoryData);
      res.status(201).json({ data: newCategory, message: 'Category created successfully' });
    } catch (error) {
      next(error);
    }
  };

  public updateCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const categoryId: string = req.params.id;
      const categoryData: CreateCategoryDto = req.body;
      const updatedCategory: Category = await this.categoryService.updateCategory(categoryId, categoryData);
      res.status(200).json({ data: updatedCategory, message: 'Category updated successfully' });
    } catch (error) {
      next(error);
    }
  };

  public deleteCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const categoryId: string = req.params.id;
      const deletedCategory: Category = await this.categoryService.deleteCategory(categoryId);
      res.status(200).json({ data: deletedCategory, message: 'Category deleted successfully' });
    } catch (error) {
      next(error);
    }
  };
}
