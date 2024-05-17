import * as classes from './sign-in.layout.styles';

interface Props extends React.PropsWithChildren {}

export const SingInLayout: React.FC<Props> = props => {
  const { children } = props;
  return <div className={classes.container}>{children}</div>;
};
