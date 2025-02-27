import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/posts/')({
  pendingComponent: () => <div>Loading...</div>,
  validateSearch: (search) => {
    return {
      q: search.q || '',
    };
  },
  loaderDeps: ({ search }) => ({ q: search.q }),
  loader: async ({ deps }) => {
    const posts = await new Promise<string[]>((resolve) => {
      setTimeout(() => resolve(['post1', 'post2', 'post3']), 1000);
    });
    return {
      posts: posts.filter((post) => post === deps.q),
    };
  },
  component: () => {
    const { posts } = Route.useLoaderData();
    const { q } = Route.useSearch();
    return (
      <div className='p-2 flex justify-center items-center h-screen'>
        {posts.map((post) => (
          <div key={post} className='p-2'>
            <Link to='/posts/$postId' params={{ postId: post }}>
              {post}
            </Link>
          </div>
        ))}
      </div>
    );
  },
  errorComponent: () => <div>Error</div>,
});
