import { Button, Typography } from '@mui/material';

import SignUpStepTwoComponent from './component/sing-up-step2.component';

import * as classes from './sign-up.styles';
import { useSignUpContext } from '#core/providers/index.js';

export const SignUpComponent: React.FC = () => {
  const { signUpData } = useSignUpContext();

  const handleNextClick = () => {
    console.log(signUpData.restaurant);
  };
  return (
    <>
      <Typography variant="h4" component="h1" className={classes.title}>
        Crea tu cuenta
        <div className={classes.steps}>
          <SignUpStepTwoComponent />
        </div>
      </Typography>
      <div className={classes.buttons}>
        <Button color="secondary" variant="contained">
          Anterior
        </Button>
        <Button variant="contained" onClick={handleNextClick}>
          Siguiente
        </Button>
      </div>
    </>
  );
};
