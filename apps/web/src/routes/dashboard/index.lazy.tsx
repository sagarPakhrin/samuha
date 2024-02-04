import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/dashboard/')({
  component: Index,
});

function Index() {
  return (
    <div className="p-2">
      <h3>Dashboard</h3>
    </div>
  );
}
