import { model, Schema, Document } from 'mongoose';

interface Reservation {
  guestName: string;
  guestId: string;
  propertyId: string;
  checkInDate: Date;
  checkOutDate: Date;
  guests: number;
  totalAmount: number;
  paymentStatus: string;
  specialRequests?: string;
  createdAt: Date;
  updatedAt: Date;
}

const ReservationSchema: Schema = new Schema({
  guestName: {
    type: String,
    required: true,
  },
  guestId: {
    type: String,
    required: true,
  },
  propertyId: {
    type: String,
    required: true,
  },
  checkInDate: {
    type: Date,
    required: true,
  },
  checkOutDate: {
    type: Date,
    required: true,
  },
  guests: {
    type: Number,
    required: true,
  },
  totalAmount: {
    type: Number,
    required: true,
  },
  paymentStatus: {
    type: String,
    required: true,
    enum: ['Pending', 'Completed', 'Failed'],
  },
  specialRequests: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export const ReservationModel = model<Reservation & Document>('Reservation', ReservationSchema);
