import { Restaurant, Beer } from '#core/model';

export interface SignUpModel {
  userName: string;
  password: string;
  email: string;
  restaurants: Restaurant[];
  beers: Beer[];
}

export const createInitialSignUp = (): SignUpModel => ({
  userName: '',
  password: '',
  email: '',
  restaurants: [],
  beers: [],
});

export interface SignUpContextModel {
  signUpData: SignUpModel;
  setUserName: (userName: string) => void;
  setPassword: (password: string) => void;
  setEmail: (email: string) => void;
  setRestaurants: (restaurants: Restaurant[]) => void;
  setBeers: (beers: Beer[]) => void;
}
