import { Button, Typography } from '@mui/material';

import * as classes from './sign-in.styles';

export const SignInComponent: React.FC = () => {
  return (
    <>
      <Typography variant="h4" component="h1">
        Crea tu cuenta
      </Typography>
      <div className={classes.steps}>{/* Components for diferents estates of sign-in */}</div>
      <div className={classes.buttons}>
        <Button color="secondary" variant="contained">
          Anterior
        </Button>
        <Button variant="contained">Siguiente</Button>
      </div>
    </>
  );
};
