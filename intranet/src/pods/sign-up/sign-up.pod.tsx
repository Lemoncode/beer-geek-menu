import { SignUpComponent } from './sign-up.component';
import { useSignUpContext } from '#core/providers/sign-up';
export const SignUpPod: React.FC = () => {
  const { signUpData } = useSignUpContext();

  console.log(signUpData);
  return <SignUpComponent />;
};
