import { Routes, Route } from 'react-router-dom';
import ClientLayout from './client/layouts/ClientLayout';
import AdminLayout from './admin/layouts/AdminLayout';
import Home from './client/pages/Home';
import Login from './client/pages/Login';
import Dashboard from './admin/pages/Dashboard';
import Users from './admin/pages/Users';

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
        <Route index element={<Dashboard />} />
        <Route path="users" element={<Users />} />
      </Route>
    </Routes>
  );
}

export default App;
