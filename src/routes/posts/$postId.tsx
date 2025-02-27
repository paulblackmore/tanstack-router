import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/posts/$postId')({
  loader: async ({ params }) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return { postId: params.postId };
  },
  component: () => {
    const { postId } = Route.useLoaderData();
    return (
      <div className='p-2 flex justify-center items-center h-screen'>{`Hello "/posts/${postId}"!`}</div>
    );
  },
  pendingComponent: () => <div>Loading...</div>,
  errorComponent: () => <div>Error</div>,
});
