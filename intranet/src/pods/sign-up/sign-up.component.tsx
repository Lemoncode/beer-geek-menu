import { Button, Typography } from '@mui/material';

import * as classes from './sign-up.styles';
import { BeerListComponent } from './components/sign-up-step3.component';

export const SignUpComponent: React.FC = () => {
  return (
    <>
      <Typography variant="h4" component="h1">
        Crea tu cuenta
      </Typography>
      <div className={classes.steps}>{<BeerListComponent />}</div>
      <div className={classes.buttons}>
        <Button color="secondary" variant="contained">
          Anterior
        </Button>
        <Button variant="contained">Siguiente</Button>
      </div>
    </>
  );
};
