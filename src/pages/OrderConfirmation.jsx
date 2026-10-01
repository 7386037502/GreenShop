import { Check, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useShop } from "../context/ShopContext";

export default function OrderConfirmation({ onClose }) {
  const { cart, total } = useShop();
  return (
    <div className="container-shop min-h-[650px] py-10">
      <div className="mx-auto max-w-xl overflow-hidden border-b-4 border-green-500 bg-white p-8 text-center shadow-xl">
        <button onClick={onClose} className="float-right text-gray-400">
          <X size={18} />
        </button>
        <div className="mx-auto grid h-14 w-14 place-items-center rounded border-2 border-green-500 text-green-500">
          <Check size={28} />
        </div>
        <p className="mt-4 text-sm text-gray-500">Thank you!</p>
        <h2 className="mt-1 text-lg font-bold">Your order has been received</h2>
        <div className="mt-7 grid grid-cols-2 gap-4 border-y border-gray-100 py-4 text-left text-xs sm:grid-cols-4">
          <div>
            <span className="text-gray-400">Order Number</span>
            <b className="mt-1 block">19586687</b>
          </div>
          <div>
            <span className="text-gray-400">Date</span>
            <b className="mt-1 block">15 Sep, 2026</b>
          </div>
          <div>
            <span className="text-gray-400">Total</span>
            <b className="mt-1 block">${total.toFixed(2)}</b>
          </div>
          <div>
            <span className="text-gray-400">Payment</span>
            <b className="mt-1 block">Cash on delivery</b>
          </div>
        </div>
        <h3 className="mt-7 text-left text-sm font-bold">Order Details</h3>
        <div className="mt-3 grid gap-3">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center gap-3 text-left">
              <img
                src={item.image}
                alt=""
                className="h-12 w-12 bg-green-50 object-cover"
              />
              <span className="min-w-0 flex-1 text-xs">
                {item.name}
                <small className="block text-gray-400">(x {item.qty})</small>
              </span>
              <b className="text-xs text-green-500">
                ${(item.price * item.qty).toFixed(2)}
              </b>
            </div>
          ))}
        </div>
        <p className="mt-7 text-xs leading-5 text-gray-400">
          Your order is currently being processed. You will receive an order
          confirmation email shortly with the expected delivery date.
        </p>
        <Link to="/account" className="btn-green mt-5 inline-block">
          Track your order
        </Link>
      </div>
    </div>
  );
}
