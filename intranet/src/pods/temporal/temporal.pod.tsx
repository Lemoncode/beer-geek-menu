import React from 'react';
import * as api from './api';

export const TemporalPod = () => {
  const [temporals, setTemporals] = React.useState<{ id: string; name: string }[]>([]);

  const onLoad = () => {
    api.getTemporalList().then(setTemporals);
  };

  React.useEffect(() => {
    onLoad();
  }, []);

  return (
    <>
      <h1>Intranet Temporal</h1>
      <ul>
        {temporals.map(temporal => (
          <li key={temporal.id}>{temporal.name}</li>
        ))}
      </ul>
    </>
  );
};
