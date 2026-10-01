import { useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import OrderConfirmation from "./OrderConfirmation";
import { useShop } from "../context/ShopContext";

export default function Checkout() {
  const { cart, total } = useShop();
  const [placed, setPlaced] = useState(false);
  const [method, setMethod] = useState("cash");
  const [different, setDifferent] = useState(false);

  if (placed) {
    return <OrderConfirmation onClose={() => setPlaced(false)} />;
  }

  return (
    <>
      <Breadcrumb items={["Shop", "Checkout"]} />

      <div className="container-shop grid gap-8 lg:grid-cols-[1.55fr_1fr] lg:gap-10">
        {/* BILLING ADDRESS */}
        <section className="min-w-0">
          <h2 className="text-lg font-bold">Billing Address</h2>

          <form
            id="checkout-form"
            onSubmit={(e) => {
              e.preventDefault();
              setPlaced(true);
            }}
            className="mt-5 grid gap-4 sm:grid-cols-2"
          >
            <Field label="First Name *" />
            <Field label="Last Name *" />

            <Field label="Country / Region *" select />
            <Field label="Town / City *" />

            <Field
              label="Street Address *"
              placeholder="House number and street name"
            />

            <Field
              label=""
              placeholder="Apartment, suite, unit, etc. (optional)"
            />

            <Field label="State *" select />
            <Field label="Zip *" />

            <Field label="Email address *" type="email" />
            <Field label="Phone Number *" placeholder="+966" />

            <label className="flex items-center gap-2 text-xs text-gray-600 sm:col-span-2">
              <input
                type="checkbox"
                checked={different}
                onChange={(e) => setDifferent(e.target.checked)}
                className="accent-green-500"
              />
              Ship to a different address?
            </label>

            {different && (
              <div className="rounded bg-green-50 p-4 text-xs text-gray-500 sm:col-span-2">
                Additional shipping address fields can be entered here.
              </div>
            )}

            <label className="text-xs font-medium sm:col-span-2">
              Order notes (optional)

              <textarea className="input mt-2 h-28 resize-none" />
            </label>
          </form>
        </section>

        {/* YOUR ORDER */}
        <aside className="min-w-0">
          <h2 className="text-lg font-bold">Your Order</h2>

          <div className="mt-5 grid gap-3">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex min-w-0 items-center gap-3"
              >
                <img
                  src={item.image}
                  alt=""
                  className="h-14 w-14 shrink-0 bg-green-50 object-cover"
                />

                <div className="min-w-0 flex-1">
                  <p className="truncate text-xs font-semibold">
                    {item.name}
                  </p>

                  <p className="text-[10px] text-gray-400">
                    (x {item.qty})
                  </p>
                </div>

                <b className="shrink-0 text-xs text-green-500">
                  ${(item.price * item.qty).toFixed(2)}
                </b>
              </div>
            ))}
          </div>

          {/* TOTAL */}
          <div className="mt-6 grid gap-3 border-t border-gray-100 pt-5 text-sm">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <b>${(total - 16).toFixed(2)}</b>
            </div>

            <div className="flex justify-between">
              <span>Shipping</span>
              <b>$16.00</b>
            </div>

            <div className="flex justify-between pt-2 text-base">
              <b>Total</b>

              <b className="text-green-500">
                ${total.toFixed(2)}
              </b>
            </div>
          </div>

          {/* PAYMENT METHOD */}
          <div className="mt-7">
            <h3 className="text-sm font-bold">Payment Method</h3>

            <div className="mt-3 grid gap-2">
              {/* PAYPAL */}
              <label
                className={`flex cursor-pointer items-center gap-3 rounded border p-3 text-xs ${
                  method === "paypal"
                    ? "border-green-500"
                    : "border-gray-200"
                }`}
              >
                <input
                  type="radio"
                  name="payment"
                  checked={method === "paypal"}
                  onChange={() => setMethod("paypal")}
                  className="shrink-0 accent-green-500"
                />

                <img
                  src="/image 16.png"
                  alt="PayPal Mastercard VISA AMEX"
                  className="h-7 w-auto max-w-[180px] object-contain"
                />
              </label>

              {/* BANK */}
              <label
                className={`flex cursor-pointer items-center gap-2 rounded border p-3 text-xs ${
                  method === "bank"
                    ? "border-green-500"
                    : "border-gray-200"
                }`}
              >
                <input
                  type="radio"
                  name="payment"
                  checked={method === "bank"}
                  onChange={() => setMethod("bank")}
                  className="shrink-0 accent-green-500"
                />

                Direct bank transfer
              </label>

              {/* CASH */}
              <label
                className={`flex cursor-pointer items-center gap-2 rounded border p-3 text-xs ${
                  method === "cash"
                    ? "border-green-500"
                    : "border-gray-200"
                }`}
              >
                <input
                  type="radio"
                  name="payment"
                  checked={method === "cash"}
                  onChange={() => setMethod("cash")}
                  className="shrink-0 accent-green-500"
                />

                Cash on delivery
              </label>
            </div>
          </div>

          <button
            form="checkout-form"
            disabled={!cart.length}
            className="btn-green mt-6 w-full disabled:opacity-50"
          >
            Place Order
          </button>
        </aside>
      </div>
    </>
  );
}

function Field({
  label,
  placeholder = "",
  type = "text",
  select = false,
}) {
  return (
    <label className="text-xs font-medium text-gray-700">
      {label}

      {select ? (
        <select className="input mt-2">
          <option>Select a country / region</option>
          <option>United States</option>
          <option>India</option>
        </select>
      ) : (
        <input
          type={type}
          className="input mt-2"
          placeholder={placeholder}
        />
      )}
    </label>
  );
}