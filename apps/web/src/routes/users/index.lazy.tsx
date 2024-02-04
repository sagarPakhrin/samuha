import { createLazyFileRoute } from '@tanstack/react-router';
import { DataTableDemo } from '../../pages/users/list';

export const Route = createLazyFileRoute('/users/')({
  component: Index,
});

function Index() {
  return (
    <div className="p-2">
      <h3>Users</h3>
      <div className="mt-4">
        <DataTableDemo />
      </div>
    </div>
  );
}
