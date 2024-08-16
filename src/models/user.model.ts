import { model, Schema, Document } from 'mongoose';
import { User } from '@interfaces/user.interface';

const userSchema: Schema = new Schema({
  name: { type: String },
  email: { type: String, unique: true },
  emailVerified: { type: Date },
  image: { type: String },
  isAdmin: { type: Boolean, default: false },
  accounts: [{ type: Schema.Types.ObjectId, ref: 'Account' }],
  sessions: [{ type: Schema.Types.ObjectId, ref: 'Session' }],
});

export const userModel = model<User & Document>('User', userSchema);
