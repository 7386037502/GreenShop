import { Trash2 } from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";
import ProductCard from "../components/ProductCard";
import QuantityControl from "../components/QuantityControl";
import OrderSummary from "../components/OrderSummary";
import { useShop } from "../context/ShopContext";

export default function Cart() {
  const { cart, updateQty, removeFromCart, products } = useShop();

  return (
    <>
      <Breadcrumb items={["Shop", "Shopping Cart"]} />

      <div className="container-shop grid gap-8 lg:grid-cols-[1.7fr_1fr] lg:gap-10">
        <section className="min-w-0">
          {/* DESKTOP HEADER */}
          <div className="hidden grid-cols-[2fr_1fr_1fr_1fr_30px] border-b border-gray-100 pb-3 text-xs font-semibold sm:grid">
            <span>Products</span>
            <span>Price</span>
            <span>Quantity</span>
            <span>Total</span>
            <span />
          </div>

          {cart.map((item) => (
            <div
              key={item.id}
              className="
                grid
                gap-4
                border-b
                border-gray-100
                py-5
                sm:grid-cols-[2fr_1fr_1fr_1fr_30px]
                sm:items-center
              "
            >
              {/* PRODUCT */}
              <div className="flex min-w-0 items-center gap-3 sm:gap-4">
                <img
                  src={item.image}
                  alt=""
                  className="h-16 w-16 shrink-0 bg-green-50 object-cover sm:h-20 sm:w-20"
                />

                <div className="min-w-0">
                  <h3 className="truncate text-sm font-semibold">
                    {item.name}
                  </h3>

                  <p className="mt-1 text-[10px] text-gray-400">
                    SKU: 199575187796
                  </p>
                </div>
              </div>

              {/* PRICE */}
              <div className="text-sm font-medium">
                <span className="sm:hidden text-[10px] text-gray-400">
                  Price:{" "}
                </span>
                ${item.price.toFixed(2)}
              </div>

              {/* QUANTITY */}
              <div>
                <QuantityControl
                  value={item.qty}
                  onChange={(qty) => updateQty(item.id, qty)}
                />
              </div>

              {/* TOTAL */}
              <div className="font-bold text-green-500">
                ${(
                  item.price * item.qty
                ).toFixed(2)}
              </div>

              {/* DELETE */}
              <button
                onClick={() => removeFromCart(item.id)}
                className="w-fit text-gray-400 transition hover:text-red-500"
              >
                <Trash2 size={17} />
              </button>
            </div>
          ))}

          {!cart.length && (
            <div className="py-20 text-center text-gray-500">
              Your cart is empty.
            </div>
          )}
        </section>

        {/* ORDER SUMMARY */}
        <div className="min-w-0">
          <OrderSummary />
        </div>
      </div>

      {/* RELATED PRODUCTS */}
      <section className="container-shop mt-12 sm:mt-16">
        <h2 className="text-lg font-bold">You may be interested in</h2>

        <div className="mt-7 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-5">
          {products.slice(3, 8).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </>
  );
}