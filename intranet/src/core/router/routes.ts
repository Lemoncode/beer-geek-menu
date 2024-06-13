interface PathRoutes {
  root: string;
  signIn: string;
}

export const pathRoutes: PathRoutes = {
  root: '/',
  signIn: '/sign-in',
};

interface Routes extends PathRoutes {}

export const routes: Routes = {
  ...pathRoutes,
};
