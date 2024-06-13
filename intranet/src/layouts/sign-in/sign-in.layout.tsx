import * as classes from './sign-in.layout.styles';

interface Props extends React.PropsWithChildren {}

export const SignInLayout: React.FC<Props> = props => {
  const { children } = props;
  return <div className={classes.container}>{children}</div>;
};
