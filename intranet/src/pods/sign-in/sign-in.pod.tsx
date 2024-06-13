import { SignInComponent } from './sign-in.component';

export const SignInPod: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return <SignInComponent handleSubmit={handleSubmit} />;
};
