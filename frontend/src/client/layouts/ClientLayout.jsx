import { Outlet, Link } from 'react-router-dom';

const ClientLayout = () => (
  <div className="min-h-screen flex flex-col">
    <header className="bg-blue-600 text-white p-4">
      <nav className="container mx-auto flex justify-between">
        <Link to="/" className="text-xl font-bold">My App</Link>
        <div>
          <Link to="/login" className="mr-4">Login</Link>
          <Link to="/admin">Admin</Link>
        </div>
      </nav>
    </header>
    <main className="flex-grow container mx-auto p-4">
      <Outlet />
    </main>
    <footer className="bg-gray-800 text-white p-4 text-center">
      Client Footer
    </footer>
  </div>
);

export default ClientLayout;
