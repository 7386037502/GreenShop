import { useState } from "react";
import Modal from "./Modal";
import { useShop } from "../context/ShopContext";

export default function AuthModal({ open, onClose }) {
  const [mode, setMode] = useState("login");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const { setUser } = useShop();

  const submit = (e) => {
    e.preventDefault();
    setUser({ name: name || "GreenShop User", email });
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <div className="pt-3">
        <div className="flex justify-center gap-2 text-lg font-semibold">
          <button
            onClick={() => setMode("login")}
            className={mode === "login" ? "text-green-500" : "text-gray-500"}
          >
            Login
          </button>
          <span className="text-gray-300">|</span>
          <button
            onClick={() => setMode("register")}
            className={mode === "register" ? "text-green-500" : "text-gray-500"}
          >
            Register
          </button>
        </div>
        <p className="mt-3 text-center text-xs text-gray-500">
          {mode === "login"
            ? "Enter your username and password to login."
            : "Create your account to continue shopping."}
        </p>
        <form onSubmit={submit} className="mt-7 grid gap-4">
          {mode === "register" && (
            <input
              className="input"
              placeholder="Username"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          )}
          <input
            className="input"
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="input"
            type="password"
            placeholder="Password"
            required
          />
          {mode === "login" && (
            <button type="button" className="text-right text-xs text-green-500">
              Forgot Password?
            </button>
          )}
          <button className="btn-green w-full">
            {mode === "login" ? "Login" : "Register"}
          </button>
          <div className="text-center text-xs text-gray-400">
            Or continue with
          </div>
          <button
            type="button"
            className="rounded border border-gray-200 py-2 text-sm font-medium"
          >
            Continue with Google
          </button>
        </form>
      </div>
    </Modal>
  );
}
