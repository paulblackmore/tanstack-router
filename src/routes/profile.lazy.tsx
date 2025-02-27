import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/profile')({
  component: () => {
    return (
      <div className='p-2 flex justify-center items-center h-screen'>
        Hello I'm being lazy "/profile"!
      </div>
    );
  },
  pendingComponent: () => <div>Loading...</div>,
  errorComponent: () => <div>Error</div>,
});
