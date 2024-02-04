import { cn } from '@samuha/utils';
import { Link } from '@tanstack/react-router';
import { LucideIcon, PieChartIcon, PlusIcon, Users2Icon } from 'lucide-react';

interface Route {
  to: string;
  icon: LucideIcon;
  label: string;
}

export const routes: Route[] = [
  {
    to: '/',
    label: 'Dashboard',
    icon: PieChartIcon,
  },
  {
    to: '/samuha',
    label: 'Samuha',
    icon: PlusIcon,
  },
  {
    to: '/users',
    label: 'Users',
    icon: Users2Icon,
  },
];

export const Sidebar = () => {
  return (
    <aside
      className={cn(
        'h-full flex-shrink-0 flex flex-col bg-stone-800 w-56 px-1 py-6 justify-between'
      )}
    >
      <nav className="flex-1 flex flex-col gap-1 text-sm">
        <div className="font-bold text-center">
          <span className="text-stone-400 text-xs">Samuha</span>
        </div>
        <div className="mt-8 flex flex-col gap-1">
          {routes.map(({ to, icon: Icon, label }, idx) => (
            <Link
              key={idx}
              to={to}
              className={cn(
                'rounded py-3 px-3 text-white font-medium flex items-center gap-4',
                'hover:bg-stone-700',
                '[&.active]:bg-stone-700'
              )}
            >
              <Icon className="h-4 w-4" />
              <span className="truncate">{label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </aside>
  );
};
