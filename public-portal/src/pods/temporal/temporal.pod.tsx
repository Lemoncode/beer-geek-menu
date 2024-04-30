import React from 'react';
import * as api from './api';

export const TemporalPod = async () => {
  const temporals = await api.getTemporalList();

  return (
    <>
      <h1>Public Portal Temporal</h1>
      <ul>
        {temporals.map(temporal => (
          <li key={temporal.id}>{temporal.name}</li>
        ))}
      </ul>
    </>
  );
};
