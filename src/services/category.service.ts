import { Service } from 'typedi';
import { Category } from '@interfaces/category.interface';
import { CategoryModel } from '@models/category.model';
import { CreateCategoryDto } from '@dtos/category.dto';
import { HttpException } from '@exceptions/HttpException';

@Service()
export class CategoryService {
  public async findAllCategories(): Promise<Category[]> {
    const categories: Category[] = await CategoryModel.find();
    return categories;
  }

  public async findCategoryById(categoryId: string): Promise<Category> {
    const category: Category = await CategoryModel.findOne({ _id: categoryId });
    if (!category) {
      throw new HttpException(404, "Category not found");
    }
    return category;
  }

  public async createCategory(categoryData: CreateCategoryDto): Promise<Category> {
    const existingCategory = await CategoryModel.findOne({ slug: categoryData.slug });
    if (existingCategory) {
      throw new HttpException(409, `Category with slug ${categoryData.slug} already exists`);
    }

    const createdCategory: Category = await CategoryModel.create(categoryData);
    return createdCategory;
  }

  public async updateCategory(categoryId: string, categoryData: CreateCategoryDto): Promise<Category> {
    const existingCategory = await CategoryModel.findOne({ slug: categoryData.slug });
    if (existingCategory && existingCategory._id !== categoryId) {
      throw new HttpException(409, `Category with slug ${categoryData.slug} already exists`);
    }

    const updatedCategory: Category = await CategoryModel.findByIdAndUpdate(categoryId, categoryData, { new: true });
    if (!updatedCategory) {
      throw new HttpException(404, "Category not found");
    }

    return updatedCategory;
  }

  public async deleteCategory(categoryId: string): Promise<Category> {
    const deletedCategory: Category = await CategoryModel.findOneAndDelete({_id : categoryId});
    if (!deletedCategory) {
      throw new HttpException(404, "Category not found");
    }
    return deletedCategory;
  }
}
