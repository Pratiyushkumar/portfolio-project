import { Outlet } from 'react-router';

const Layout = () => {
  return (
    <div className="min-h-screen w-full bg-background text-foreground overflow-hidden">
      <main className="h-full">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
