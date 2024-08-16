import { model, Schema, Document } from 'mongoose';
import { Category } from '@interfaces/category.interface';

const categorySchema: Schema = new Schema({
  createdAt: { type: Date, default: Date.now },
  title: { type: String, required: true },
  desc: { type: String, required: true },
  color: { type: String, required: true },
  img: { type: String, required: true },
  slug: { type: String, unique: true, required: true },
});

export const CategoryModel = model<Category & Document>('Category', categorySchema);
