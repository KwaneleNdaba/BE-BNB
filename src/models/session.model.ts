import { model, Schema, Document } from 'mongoose';
import { Session } from '@interfaces/session.interface';

const sessionSchema: Schema = new Schema({
  sessionToken: { type: String, required: true, unique: true },
  userId: { type: String, required: true },
  expires: { type: Date, required: true },
});

export const sessionModel = model<Session & Document>('Session', sessionSchema);
