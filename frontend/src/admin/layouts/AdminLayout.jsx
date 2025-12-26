import { Outlet, Link } from 'react-router-dom';

const AdminLayout = () => (
  <div className="min-h-screen flex">
    <aside className="w-64 bg-gray-900 text-white p-4">
      <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
      <nav className="flex flex-col gap-2">
        <Link to="/admin" className="p-2 hover:bg-gray-800 rounded">Dashboard</Link>
        <Link to="/admin/users" className="p-2 hover:bg-gray-800 rounded">Users</Link>
        <Link to="/admin/settings" className="p-2 hover:bg-gray-800 rounded">Settings</Link>
        <Link to="/" className="p-2 hover:bg-gray-800 rounded mt-auto">Back to Site</Link>
      </nav>
    </aside>
    <main className="flex-grow bg-gray-100 p-8">
      <Outlet />
    </main>
  </div>
);

export default AdminLayout;
