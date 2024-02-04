import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { Sidebar } from '../components/Sidebar/Sidebar';
import TopNav from '../components/Topnav/Topnav';
// import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export const Route = createRootRoute({
  component: Page,
});

function Page() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1">
        <TopNav />
        <Outlet />
      </div>
    </div>
  );
}
