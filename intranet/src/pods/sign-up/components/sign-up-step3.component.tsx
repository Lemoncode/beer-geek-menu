import { Button, Card, CardContent, CardMedia, Checkbox, Tab, Tabs, TextField, Typography } from '@mui/material';
import * as classes from './sign-up-step3.styles';
import { ChangeEvent, SyntheticEvent, useState } from 'react';
import { selectedBeer } from './sign-up-step3.model';
import { YourSelection } from './sign-up-step3-yourSelection.component';
import { useSignUpContext } from '#core/providers/index.js';
import { CustomTabPanel, allyProps } from '#core/common/customTabPanel.component.js';
import { mapBeerToSelectedBeerModel, mapSelectedBeerToBeerModel } from './sign-up-step3.mapper';
import { beerListMock } from '../beer-list.mock';

export const BeerListComponent: React.FC = () => {
  const [tab, setTab] = useState(0);

  const { setBeers } = useSignUpContext();
  const [selectedBeer, setSelectedBeer] = useState<selectedBeer[]>(mapBeerToSelectedBeerModel(beerListMock));
  const [filter, setFilter] = useState<selectedBeer[]>([]);

  const handleChangeChecked = (e: ChangeEvent<HTMLInputElement>, id: string) => {
    const arraySelectedBeers = selectedBeer.map(beer =>
      beer.id === id ? { ...beer, isSelected: e.target.checked } : beer
    );

    setSelectedBeer(arraySelectedBeers);
    handleFilteredSelectedBeers(arraySelectedBeers);
  };

  const handleFilteredSelectedBeers = (newBeers: selectedBeer[]) => {
    const filteredBeers = newBeers.filter(value => value.isSelected);
    const mapper = mapSelectedBeerToBeerModel(filteredBeers);
    setFilter(filteredBeers);
    setBeers(mapper);
  };

  const handleDeselectedBeer = (e: ChangeEvent<HTMLInputElement>, id: string) => {
    const arrayUnSelectedBeers = selectedBeer.map(value =>
      value.id === id && value.isSelected ? { ...value, isSelected: e.target.checked } : value
    );
    setSelectedBeer(arrayUnSelectedBeers);
  };

  const handleChangeTab = (event: SyntheticEvent, newValue: number) => {
    event.preventDefault();
    setTab(newValue);
  };

  return (
    <>
      <Typography sx={{ textAlign: 'center' }} variant="h5" component="h1">
        Paso 3 - Elije cervezas
      </Typography>

      <Typography sx={{ margin: '1rem 0 1rem 0' }} variant="body1">
        ¿Qué cervezas sueles ofrecer? Vamos a elegirlas (mas adelante podrás añadir y quitar)
      </Typography>
      <Tabs variant="fullWidth" sx={{ marginBottom: 2 }} value={tab} onChange={handleChangeTab}>
        <Tab label="Lista" {...allyProps(0)} />
        <Tab label="Tu selección" {...allyProps(1)} />
      </Tabs>
      <CustomTabPanel value={tab} index={0}>
        <Card>
          <section className={classes.section}>
            <TextField sx={{ width: 290 }} size="small" />
            <Button sx={{ marginLeft: 2 }} variant="contained">
              filtrar
            </Button>
          </section>
          <CardContent sx={{ marginTop: 0 }}>
            {selectedBeer.map(beer => (
              <main key={beer.id} className={classes.container}>
                <Checkbox
                  key={beer.id}
                  name={beer.name}
                  value={beer.name}
                  checked={beer.isSelected}
                  onChange={e => handleChangeChecked(e, beer.id)}
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
      </CustomTabPanel>

      <CustomTabPanel value={tab} index={1}>
        <YourSelection
          selectedBeers={filter}
          setFilterBeers={setFilter}
          onDeSelectedBeer={handleDeselectedBeer}
          setBeers={setBeers}
        />
      </CustomTabPanel>
    </>
  );
};
