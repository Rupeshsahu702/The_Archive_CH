import { Routes, Route } from 'react-router-dom';
import ClientLayout from './client/layouts/ClientLayout';
import AdminLayout from './admin/layouts/AdminLayout';

// Client Pages
import Home from './client/pages/Home';
import Login from './client/pages/Login';
import Products from './client/pages/Products';
import Popular from './client/pages/Popular';
import Monthly from './client/pages/Monthly';
import More from './client/pages/More';
import Cart from './client/pages/Cart';

// Admin Pages
import Dashboard from './admin/pages/Dashboard';
import Users from './admin/pages/Users';

function App() {
  return (
    <Routes>
      {/* Client Routes */}
      <Route path="/" element={<ClientLayout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="products" element={<Products />} />
        <Route path="popular" element={<Popular />} />
        <Route path="monthly" element={<Monthly />} />
        <Route path="more" element={<More />} />
        <Route path="cart" element={<Cart />} />
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
