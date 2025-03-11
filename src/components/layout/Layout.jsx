import { Outlet } from 'react-router';
import Navbar from '../Navbar/Navbar';

const Layout = () => {
  return (
    <div className="min-h-screen w-full bg-background text-foreground overflow-hidden">
      <Navbar />
      <main className="h-full">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
