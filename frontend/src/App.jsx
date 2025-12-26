import { Routes, Route } from 'react-router-dom';
import ClientLayout from './client/layouts/ClientLayout';
import AdminLayout from './admin/layouts/AdminLayout';

// Client Pages
const Home = () => <h1 className="text-3xl font-bold">Welcome to the Client App</h1>;
const Login = () => <h1 className="text-3xl font-bold">Login Page</h1>;
const Products = () => <h1 className="text-3xl font-bold">All Products</h1>;
const Popular = () => <h1 className="text-3xl font-bold">Popular Items</h1>;
const Monthly = () => <h1 className="text-3xl font-bold">Monthly Deals</h1>;
const More = () => <h1 className="text-3xl font-bold">More</h1>;
const Cart = () => <h1 className="text-3xl font-bold">Shopping Cart</h1>;

// Admin Pages
const AdminDashboard = () => <h1 className="text-3xl font-bold">Admin Dashboard</h1>;
const AdminUsers = () => <h1 className="text-3xl font-bold">Manage Users</h1>;

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
        <Route index element={<AdminDashboard />} />
        <Route path="users" element={<AdminUsers />} />
      </Route>
    </Routes>
  );
}

export default App;
