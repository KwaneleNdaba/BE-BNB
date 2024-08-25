export interface IReservation {
    id: number;
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
    specificRatings: ISpecificRatings;
  }
  
  export interface ISpecificRatings {
    cleanliness: number;
    communication: number;
    checkIn: number;
    accuracy: number;
    location: number;
    value: number;
  }
  