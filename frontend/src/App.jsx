import { Routes, Route, Outlet, Link } from 'react-router-dom';

// Layouts
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

// Pages
const Home = () => <h1 className="text-3xl font-bold">Welcome to the Client App</h1>;
const Login = () => <h1 className="text-3xl font-bold">Login Page</h1>;
const AdminDashboard = () => <h1 className="text-3xl font-bold">Admin Dashboard</h1>;
const AdminUsers = () => <h1 className="text-3xl font-bold">Manage Users</h1>;

function App() {
  return (
    <Routes>
      {/* Client Routes */}
      <Route path="/" element={<ClientLayout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
      </Route>

      {/* Admin Routes */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="users" element={<AdminUsers />} />
      </Route>
    </Routes>
  );
}

export default App;
