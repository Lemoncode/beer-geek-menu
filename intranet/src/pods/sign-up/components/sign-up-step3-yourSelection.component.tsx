import { ChangeEvent, FC } from 'react';
import { selectedBeer } from './sign-up-step3.model';
import { Card, CardContent, CardMedia, Checkbox, Typography } from '@mui/material';
import * as classes from './sign-up-step3.styles';
import { mapSelectedBeerToBeerModel } from './sign-up-step3.mapper';
import { Beer } from '#core/model/index.js';

interface Props {
  selectedBeers: selectedBeer[];
  setFilterBeers: (selectedBeers: selectedBeer[]) => void;
  setBeers: (beers: Beer[]) => void;
  onDeSelectedBeer: (e: ChangeEvent<HTMLInputElement>, id: string) => void;
}

export const YourSelection: FC<Props> = props => {
  const { selectedBeers, setFilterBeers, onDeSelectedBeer, setBeers } = props;

  const handleChange = (e: ChangeEvent<HTMLInputElement>, id: string) => {
    const arrayUnSelectedBeers = selectedBeers.map(value =>
      value.id === id && value.isSelected ? { ...value, isSelected: e.target.checked } : value
    );
    setFilterBeers(arrayUnSelectedBeers);
    handleFilteredBeers(arrayUnSelectedBeers);

    if (!e.target.checked) {
      onDeSelectedBeer(e, id);
    }
  };

  const handleFilteredBeers = (beers: selectedBeer[]) => {
    const filteredUnSelectedBeers = beers.filter(beer => beer.isSelected);
    const mapper = mapSelectedBeerToBeerModel(filteredUnSelectedBeers);
    setFilterBeers(filteredUnSelectedBeers);
    setBeers(mapper);
  };

  return (
    <>
      <Card>
        <CardContent>
          {selectedBeers.map(beer => (
            <main key={beer.id} className={classes.container}>
              <Checkbox
                key={beer.id}
                name={beer.name}
                value={beer.name}
                checked={beer.isSelected}
                onChange={e => handleChange(e, beer.id)}
                color="info"
              />
              <CardMedia sx={{ width: 120 }} component="img" src={beer.photoUrl} alt={beer.name} />

              <aside>
                <Typography variant="body1">{beer.name}</Typography>

                <Typography mt={5} variant="body1">
                  {beer.country} {`${'/'}`} {beer.volume} {`${' '}`}Cl
                </Typography>
              </aside>
            </main>
          ))}
        </CardContent>
      </Card>
    </>
  );
};
