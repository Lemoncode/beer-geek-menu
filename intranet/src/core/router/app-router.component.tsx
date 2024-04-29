import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { TemporalScene } from '#scenes';
import { pathRoutes } from './routes';

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path={pathRoutes.root} element={<TemporalScene />} />
      </Routes>
    </Router>
  );
};
