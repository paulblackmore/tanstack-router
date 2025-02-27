import { useState } from 'react';
import { Link, Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const [search, setSearch] = useState('post2');
  return (
    <>
      <div className='p-2 flex gap-2 text-lg justify-between w-full bg-orange-500'>
        <Link
          to='/'
          activeProps={{
            className: 'font-bold',
          }}
          activeOptions={{ exact: true }}
        >
          Home
        </Link>
        <Link
          to='/about'
          activeProps={{
            className: 'font-bold',
          }}
        >
          About
        </Link>
        <Link
          to='/profile'
          activeProps={{
            className: 'font-bold',
          }}
        >
          Profile
        </Link>
        <Link
          to='/posts'
          activeProps={{
            className: 'font-bold',
          }}
          search={{
            q: search,
          }}
        >
          Posts
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools position='bottom-right' />
    </>
  );
}
