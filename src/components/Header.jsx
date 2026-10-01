import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  Search,
  ShoppingCart,
  UserRound,
  Menu,
  X,
} from "lucide-react";
import { useShop } from "../context/ShopContext";

export default function Header({ onLogin }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  const { cart, user } = useShop();
  const navigate = useNavigate();

  const submitSearch = (e) => {
    e.preventDefault();

    if (!query.trim()) return;

    navigate(`/shop?search=${encodeURIComponent(query)}`);
    setSearchOpen(false);
    setMobileOpen(false);
  };

  const navClass = ({ isActive }) =>
    `relative py-7 text-sm font-medium transition ${
      isActive
        ? "text-green-500 after:absolute after:left-0 after:right-0 after:-bottom-[1px] after:h-[3px] after:bg-green-500"
        : "text-gray-700 hover:text-green-500"
    }`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
      {/* ================= DESKTOP HEADER ================= */}
      <div className="container-shop flex h-[76px] items-center justify-between">

        {/* ================= LOGO ================= */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/Vector.png"
            alt="GreenShop logo"
            className="h-9 w-9 object-contain"
          />

          <span className="text-lg font-extrabold tracking-tight text-green-500">
            GREENSHOP
          </span>
        </Link>

        {/* ================= DESKTOP NAVIGATION ================= */}
        <nav className="hidden h-full items-center gap-10 md:flex">
          <NavLink to="/" end className={navClass}>
            Home
          </NavLink>

          <NavLink to="/shop" className={navClass}>
            Shop
          </NavLink>

          <NavLink to="/plant-care" className={navClass}>
            Plant Care
          </NavLink>

          <NavLink to="/blogs" className={navClass}>
            Blogs
          </NavLink>
        </nav>

        {/* ================= RIGHT SIDE ================= */}
        <div className="flex items-center gap-4">

          {/* SEARCH */}
          <button
            aria-label="Search"
            onClick={() => setSearchOpen((v) => !v)}
            className="text-gray-700 transition hover:text-green-500"
          >
            <Search size={21} />
          </button>

          {/* CART */}
          <Link
            to="/cart"
            aria-label="Cart"
            className="relative text-gray-700 transition hover:text-green-500"
          >
            <ShoppingCart size={21} />

            {cart.length > 0 && (
              <span className="absolute -right-2 -top-2 grid h-4 min-w-4 place-items-center rounded-full bg-green-500 px-1 text-[9px] font-bold text-white">
                {cart.length}
              </span>
            )}
          </Link>

          {/* LOGIN / ACCOUNT */}
          <button
            onClick={() =>
              user ? navigate("/account") : onLogin()
            }
            className="hidden rounded-md bg-green-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-green-600 sm:flex sm:items-center sm:gap-2"
          >
            <UserRound size={16} />

            {user ? "Account" : "Login"}
          </button>

          {/* MOBILE MENU BUTTON */}
          <button
            aria-label="Menu"
            className="md:hidden text-gray-700"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* ================= SEARCH BAR ================= */}
      {searchOpen && (
        <form
          onSubmit={submitSearch}
          className="border-t border-gray-100 bg-white p-3"
        >
          <div className="container-shop">
            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />

              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="input pl-10"
                placeholder="Search plants..."
              />
            </div>
          </div>
        </form>
      )}

      {/* ================= MOBILE MENU ================= */}
      {mobileOpen && (
        <div className="border-t border-gray-100 bg-white md:hidden">
          <div className="container-shop flex flex-col py-3">

            <Link
              to="/"
              onClick={() => setMobileOpen(false)}
              className="border-b border-gray-100 py-3 text-sm font-medium text-gray-700"
            >
              Home
            </Link>

            <Link
              to="/shop"
              onClick={() => setMobileOpen(false)}
              className="border-b border-gray-100 py-3 text-sm font-medium text-gray-700"
            >
              Shop
            </Link>

            <Link
              to="/plant-care"
              onClick={() => setMobileOpen(false)}
              className="border-b border-gray-100 py-3 text-sm font-medium text-gray-700"
            >
              Plant Care
            </Link>

            <Link
              to="/blogs"
              onClick={() => setMobileOpen(false)}
              className="border-b border-gray-100 py-3 text-sm font-medium text-gray-700"
            >
              Blogs
            </Link>

            <Link
              to="/cart"
              onClick={() => setMobileOpen(false)}
              className="border-b border-gray-100 py-3 text-sm font-medium text-gray-700"
            >
              Shopping Cart
            </Link>

            <Link
              to="/account"
              onClick={() => setMobileOpen(false)}
              className="border-b border-gray-100 py-3 text-sm font-medium text-gray-700"
            >
              My Account
            </Link>

            <button
              onClick={() => {
                setMobileOpen(false);
                onLogin();
              }}
              className="mt-3 rounded-md bg-green-500 py-3 text-sm font-semibold text-white transition hover:bg-green-600"
            >
              Login / Register
            </button>
          </div>
        </div>
      )}
    </header>
  );
}