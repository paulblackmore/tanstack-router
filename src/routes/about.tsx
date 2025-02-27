import * as React from 'react';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/about')({
  component: AboutComponent,
});

function AboutComponent() {
  return (
    <div className='p-2 flex justify-center items-center h-screen'>
      <h3>About</h3>
    </div>
  );
}
