import React from 'react';
import { SignUpContextModel } from './sign-up.model';

export const SignUpContext = React.createContext<SignUpContextModel | null>(null);
