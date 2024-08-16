import { model, Schema, Document } from 'mongoose';
import { Order } from '@interfaces/order.interface';

const orderSchema: Schema = new Schema({
  createdAt: { type: Date, default: Date.now },
  price: { type: Schema.Types.Decimal128, required: true },
  products: { type: [Object] },
  status: { type: String, required: true },
  intent_id: { type: String, unique: true },
  userEmail: { type: String, required: true },
});

export const orderModel = model<Order & Document>('Order', orderSchema);
