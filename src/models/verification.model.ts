import { model, Schema, Document } from 'mongoose';
import { VerificationToken } from '@interfaces/verificationToken.interface';

const verificationTokenSchema: Schema = new Schema({
  identifier: { type: String },
  token: { type: String, unique: true },
  expires: { type: Date },
});

export const verificationTokenModel = model<VerificationToken & Document>('VerificationToken', verificationTokenSchema);
