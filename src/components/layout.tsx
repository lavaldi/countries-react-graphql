import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <nav className="bg-gray-100 border-b border-gray-200 h-12">
        <div className="w-3/4 mx-auto">
          <Link to="/" className="block py-3 text-gray-700">
            List of countries
          </Link>
        </div>
      </nav>
      <main className="w-3/4 mx-auto py-10 space-y-10">{children}</main>
    </>
  );
};

export default Layout;