import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import { SignUpScene, SignInScene } from '#scenes';

import { pathRoutes } from './routes';

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path={pathRoutes.root} element={<SignUpScene />} />
        <Route path={pathRoutes.signIn} element={<SignInScene />} />
      </Routes>
    </Router>
  );
};
