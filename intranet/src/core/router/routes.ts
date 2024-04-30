interface PathRoutes {
  root: string;
}

export const pathRoutes: PathRoutes = {
  root: '/',
};

interface Routes extends PathRoutes {}

export const routes: Routes = {
  ...pathRoutes,
};
