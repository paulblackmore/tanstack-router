import * as React from 'react';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <div className='p-2 flex justify-center items-center h-screen'>
      <h3>Welcome Home!</h3>
    </div>
  );
}
