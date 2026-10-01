import { Link } from "react-router-dom";
import { useShop } from "../context/ShopContext";

export default function OrderSummary({ checkout = false, onPlaceOrder }) {
  const { cart, subtotal, discount, shipping, total, coupon, setCoupon } =
    useShop();

  return (
    <aside className="h-fit bg-white">
      <h2 className="text-lg font-bold">Cart Totals</h2>
      {!checkout && (
        <div className="mt-4">
          <label className="text-xs font-semibold">Coupon Apply</label>
          <div className="mt-2 flex">
            <input
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              className="min-w-0 flex-1 border border-gray-200 px-3 py-2 text-xs outline-none"
              placeholder="Enter coupon code here..."
            />
            <button
              onClick={() => setCoupon(coupon || "GREEN10")}
              className="bg-green-500 px-5 text-xs font-semibold text-white"
            >
              Apply
            </button>
          </div>
        </div>
      )}
      <div className="mt-6 grid gap-3 text-sm">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <b>${subtotal.toFixed(2)}</b>
        </div>
        <div className="flex justify-between">
          <span>Coupon Discount</span>
          <b>(-) ${discount.toFixed(2)}</b>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <b>${shipping.toFixed(2)}</b>
        </div>
        <div className="flex justify-between pt-3 text-base">
          <b>Total</b>
          <b className="text-green-500">${total.toFixed(2)}</b>
        </div>
      </div>
      {checkout ? (
        <button
          onClick={onPlaceOrder}
          disabled={!cart.length}
          className="btn-green mt-6 w-full disabled:opacity-50"
        >
          Place Order
        </button>
      ) : (
        <Link
          to="/checkout"
          className="btn-green mt-6 block w-full text-center"
        >
          Proceed To Checkout
        </Link>
      )}
      {!checkout && (
        <Link
          to="/shop"
          className="mt-3 block text-center text-xs text-green-500"
        >
          Continue Shopping
        </Link>
      )}
    </aside>
  );
}
