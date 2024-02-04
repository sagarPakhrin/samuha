import { createLazyFileRoute, redirect } from '@tanstack/react-router';
import { cn } from '@samuha/utils';
import { Button, Input } from '@samuha/ui';

const Login = () => {
  const login = () => {
    console.log('sagar');
    redirect({
      to: '/',
      search: {
        authenticated: true,
      },
    });
  };

  return (
    <div className="bg-emerald-50 h-screen flex items-center justify-center px-4">
      <div className={cn('w-full max-w-md rounded px-4 py-10')}>
        <h1 className="text-xl font-semibold text-slate-800 text-center">
          Login
        </h1>
        <div className="mt-10 flex flex-col gap-4">
          <Input name="username" />
          <Input name="password" type="password" />
          <Button onClick={login}>Login</Button>
        </div>
      </div>
    </div>
  );
};

export const Route = createLazyFileRoute('/login')({
  component: Login,
});
