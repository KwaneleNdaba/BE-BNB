import { model, Schema, Document } from 'mongoose';
import { Product } from '@interfaces/product.interface';

const productSchema: Schema = new Schema({
  createdAt: { type: Date, default: Date.now },
  title: { type: String, required: true },
  desc: { type: String, required: true },
  img: { type: String },
  price: { type: Schema.Types.Decimal128, required: true },
  isFeatured: { type: Boolean, default: false },
  options: { type: [Object] },
  catSlug: { type: String, required: true },
});

export const productModel = model<Product & Document>('Product', productSchema);
