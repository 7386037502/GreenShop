import { Link } from "react-router-dom";
import { useShop } from "../context/ShopContext";

export default function Account({ onLogin }) {
  const { user, setUser } = useShop();

  if (!user)
    return (
      <div className="container-shop grid min-h-[500px] place-items-center py-16 text-center sm:py-24">
        <div>
          <h1 className="text-2xl font-bold">My Account</h1>

          <p className="mt-3 text-sm text-gray-500">
            Please login to view your account.
          </p>

          <button
            onClick={onLogin}
            className="btn-green mt-6"
          >
            Login / Register
          </button>
        </div>
      </div>
    );

  return (
    <div className="container-shop py-8 sm:py-12">
      <div className="grid gap-6 md:grid-cols-[220px_1fr] md:gap-8">
        <aside className="bg-green-50 p-5">
          <h3 className="font-bold">My Account</h3>

          <div className="mt-5 grid gap-3 text-sm">
            <Link
              className="font-semibold text-green-500"
              to="/account"
            >
              Account Details
            </Link>

            <Link to="/account/address">
              Address
            </Link>

            <Link to="/cart">
              Orders
            </Link>

            <button
              onClick={() => setUser(null)}
              className="text-left text-red-500"
            >
              Logout
            </button>
          </div>
        </aside>

        <section className="min-w-0">
          <h1 className="text-2xl font-bold">
            Account Details
          </h1>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <label className="text-xs font-medium">
              First Name

              <input
                className="input mt-2"
                value={user.name}
                readOnly
              />
            </label>

            <label className="text-xs font-medium">
              Email Address

              <input
                className="input mt-2"
                value={user.email}
                readOnly
              />
            </label>

            <label className="text-xs font-medium">
              Phone Number

              <input
                className="input mt-2"
                placeholder="+1 000 000 0000"
              />
            </label>

            <label className="text-xs font-medium">
              Username

              <input
                className="input mt-2"
                value={user.name}
                readOnly
              />
            </label>
          </div>

          <button className="btn-green mt-6 w-full sm:w-auto">
            Save Changes
          </button>
        </section>
      </div>
    </div>
  );
}