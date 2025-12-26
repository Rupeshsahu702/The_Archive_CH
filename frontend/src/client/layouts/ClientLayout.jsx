import { Outlet, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const ClientLayout = () => (
  <div className="min-h-screen flex flex-col">
    {/* Replace the old header with the new Navbar component */}
    <Navbar />
    
    <main className="flex-grow container mx-auto p-4">
      <Outlet />
    </main>
    
    <footer className="bg-gray-800 text-white p-4 text-center">
      Client Footer
    </footer>
  </div>
);

export default ClientLayout;
