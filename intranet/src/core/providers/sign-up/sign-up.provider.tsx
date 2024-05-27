import React, { useState } from 'react';
import { SignUpContext } from './sign-up.context';
import { SignUpModel, createInitialSignUp, Restaurant } from './sign-up.model';
import { Beer } from '#core/model';

interface Props {
  children: React.ReactNode;
}

export const SignUpProvider: React.FC<Props> = props => {
  const { children } = props;
  const [signUpData, setSignUpData] = useState<SignUpModel>(createInitialSignUp);

  const setUserName = (userName: string) => {
    setSignUpData({ ...signUpData, userName });
  };

  const setPassword = (password: string) => {
    setSignUpData({ ...signUpData, password });
  };

  const setEmail = (email: string) => {
    setSignUpData({ ...signUpData, email });
  };

  const setRestaurants = (restaurant: Restaurant) => {
    setSignUpData({ ...signUpData, restaurant });
  };

  const setBeers = (beers: Beer[]) => {
    setSignUpData({ ...signUpData, beers });
  };

  return (
    <SignUpContext.Provider value={{ signUpData, setUserName, setPassword, setEmail, setRestaurants, setBeers }}>
      {children}
    </SignUpContext.Provider>
  );
};

export const useSignUpContext = () => {
  const context = React.useContext(SignUpContext);
  if (context === null) {
    throw 'useSignUpContext: looks like you have forgotten to add the provider on top of the app :)';
  }

  return context;
};
