export interface Restaurant {
  name: string;
  address: string;
  city: string;
  phoneNumber: string;
}

export interface Beer {
  id: string;
  name: string;
  alcohol: number;
  volume: number;
  photoUrl: string;
}

export interface SignUpModel {
  userName: string;
  password: string;
  email: string;
  restaurant: Restaurant;
  beers: Beer[];
}

export const createInitialSignUp = (): SignUpModel => ({
  userName: '',
  password: '',
  email: '',
  restaurant: {
    name: '',
    address: '',
    city: '',
    phoneNumber: '',
  },
  beers: [],
});

export interface SignUpContextModel {
  signUpData: SignUpModel;
  setUserName: (userName: string) => void;
  setPassword: (password: string) => void;
  setEmail: (email: string) => void;
  setRestaurants: (restaurant: Restaurant) => void;
  setBeers: (beers: Beer[]) => void;
}
