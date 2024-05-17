import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import { SignInScene } from '#scenes';

import { pathRoutes } from './routes';

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path={pathRoutes.root} element={<SignInScene />} />
      </Routes>
    </Router>
  );
};
