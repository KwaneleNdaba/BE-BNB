import { Schema, model, Document } from 'mongoose';

export interface IReservation extends Document {
  id: string;
  images: string[];
  type: string;
  location: string;
  guests: number;
  bedrooms: number;
  bathrooms: number;
  amenities: string[];
  rating: number;
  reviews: number;
  price: number;
  title: string;
  host: string;
  host_id: string;
  weeklyDiscount: number;
  cleaningFee: number;
  serviceFee: number;
  occupancyTaxes: number;
  enhancedCleaning: boolean;
  selfCheckIn: boolean;
  description: string;
  specificRatings: {
    cleanliness: number;
    communication: number;
    checkIn: number;
    accuracy: number;
    location: number;
    value: number;
  };
}

const ReservationSchema: Schema = new Schema({
  images: { type: [String], required: true },
  type: { type: String, required: true },
  location: { type: String, required: true },
  guests: { type: Number, required: true },
  bedrooms: { type: Number, required: true },
  bathrooms: { type: Number, required: true },
  amenities: { type: [String], required: true },
  rating: { type: Number, required: true },
  reviews: { type: Number, required: true },
  price: { type: Number, required: true },
  title: { type: String, required: true },
  host: { type: String, required: true },
  host_id: { type: String, required: true },
  weeklyDiscount: { type: Number, required: true },
  cleaningFee: { type: Number, required: true },
  serviceFee: { type: Number, required: true },
  occupancyTaxes: { type: Number, required: true },
  enhancedCleaning: { type: Boolean, required: true },
  selfCheckIn: { type: Boolean, required: true },
  description: { type: String, required: true },
  specificRatings: {
    cleanliness: { type: Number, required: true },
    communication: { type: Number, required: true },
    checkIn: { type: Number, required: true },
    accuracy: { type: Number, required: true },
    location: { type: Number, required: true },
    value: { type: Number, required: true },
  },
});

export const ReservationModel = model<IReservation>('Reservation', ReservationSchema);
