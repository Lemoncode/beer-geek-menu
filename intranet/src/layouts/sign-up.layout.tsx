import * as classes from './sign-up.layout.styles';

interface Props extends React.PropsWithChildren {}

export const SignUpLayout: React.FC<Props> = props => {
  const { children } = props;
  return <div className={classes.container}>{children}</div>;
};
