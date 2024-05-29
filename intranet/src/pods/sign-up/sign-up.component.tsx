import { useState } from 'react';
import { Button, Typography } from '@mui/material';

import SignUpStepTwoComponent from './component/sing-up-step2.component';

import * as classes from './sign-up.styles';

export const SignUpComponent: React.FC = () => {
  const [formData, setFormdata] = useState({
    name: '',
    address: '',
    city: '',
    phoneNumber: '',
  });

  const onTextFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormdata({ ...formData, [e.target.id]: e.target.value });
  };

  const handleNextClick = () => {
    console.log(formData);
  };
  return (
    <>
      <Typography variant="h4" component="h1" className={classes.title}>
        Crea tu cuenta
        <div className={classes.steps}>
          <SignUpStepTwoComponent formData={formData} onTextFieldChange={onTextFieldChange} />
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
