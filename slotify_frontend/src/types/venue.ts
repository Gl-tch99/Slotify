export interface Venue {
  id: number;
  name: string;
  image?: string;
  address: {
    street_1: string;
    city: string;
    state: string;
    pincode: number;
  };
  sports: {
    id: number;
    game: string;
  }[];
  // rating: { average: number; count: number };
  owner_user_id: number;
}
