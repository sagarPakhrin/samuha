import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/samuha/')({
  component: Index,
});

function Index() {
  return (
    <div className="p-2">
      <h3>Samuha</h3>
    </div>
  );
}
