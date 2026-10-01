import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AuthModal from "./components/AuthModal";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Account from "./pages/Account";
import Address from "./pages/Address";
import PlantCare from "./pages/PlantCare";
import Blogs from "./pages/Blogs";
import NotFound from "./pages/NotFound";

export default function App() {
  const [authOpen, setAuthOpen] = useState(false);
  return (
    <div className="min-h-screen bg-white">
      <Header onLogin={() => setAuthOpen(true)} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/account" element={<Account onLogin={() => setAuthOpen(true)} />} />
          <Route path="/account/address" element={<Address />} />
          <Route path="/plant-care" element={<PlantCare />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />
    </div>
  );
}