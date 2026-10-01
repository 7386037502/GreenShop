import { useState } from "react";
import {
  Heart,
  Minus,
  Plus,
  Star,
  Facebook,
  Linkedin,
  Mail,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import ProductCard from "../components/ProductCard";
import { useShop } from "../context/ShopContext";

export default function ProductDetails() {
  const { id } = useParams();
  const { products, addToCart, wishlist, toggleWishlist } = useShop();
  const product = products.find((p) => p.id === Number(id)) || products[0];
  const [qty, setQty] = useState(1);
  const [tab, setTab] = useState("description");
  const [image, setImage] = useState(product.image);

  return (
    <>
      <Breadcrumb items={["Shop", product.name]} />
      <div className="container-shop grid gap-10 md:grid-cols-2">
        <div className="grid grid-cols-[72px_1fr] gap-5">
          <div className="grid content-start gap-4">
            {[
              product.image,
              products[1].image,
              products[2].image,
              products[6].image,
            ].map((src, i) => (
              <button
                key={i}
                onClick={() => setImage(src)}
                className={`overflow-hidden border-2 ${image === src ? "border-green-400" : "border-transparent"}`}
              >
                <img src={src} alt="" className="aspect-square object-cover" />
              </button>
            ))}
          </div>
          <div className="bg-green-50">
            <img
              src={image}
              alt={product.name}
              className="aspect-square w-full object-cover mix-blend-multiply"
            />
          </div>
        </div>

        <div>
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <div className="mt-2 flex items-center gap-4">
            <span className="text-xl font-bold text-green-500">
              ${product.price.toFixed(2)}
            </span>
            <span className="text-xs text-gray-500">
              ★★★★★ 19 Customer Review
            </span>
          </div>
          <hr className="my-5 border-gray-100" />
          <h4 className="text-xs font-bold">Short Description:</h4>
          <p className="mt-2 text-xs leading-5 text-gray-500">
            The ceramic cylinder planters come with a wooden stand to help
            elevate your plants off the ground. This beautiful plant is perfect
            for creating a calm and natural atmosphere.
          </p>
          <div className="mt-5">
            <span className="text-xs font-bold">Size:</span>
            <div className="mt-2 flex gap-2">
              {["S", "M", "L", "XL"].map((s, i) => (
                <button
                  key={s}
                  className={`grid h-7 w-7 place-items-center rounded-full border text-xs ${i === 0 ? "border-green-500 text-green-500" : "border-gray-200"}`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center overflow-hidden rounded border border-gray-200">
              <button
                onClick={() => setQty(Math.max(1, qty - 1))}
                className="grid h-9 w-9 place-items-center bg-green-500 text-white"
              >
                <Minus size={14} />
              </button>
              <span className="grid h-9 w-10 place-items-center text-sm">
                {qty}
              </span>
              <button
                onClick={() => setQty(qty + 1)}
                className="grid h-9 w-9 place-items-center bg-green-500 text-white"
              >
                <Plus size={14} />
              </button>
            </div>
            <button
              onClick={() => addToCart(product, qty)}
              className="btn-green"
            >
              BUY NOW
            </button>
            <button
              onClick={() => addToCart(product, qty)}
              className="btn-outline"
            >
              ADD TO CART
            </button>
            <button
              onClick={() => toggleWishlist(product.id)}
              className={`grid h-10 w-10 place-items-center rounded border ${wishlist.includes(product.id) ? "text-red-500" : "text-green-500"}`}
            >
              <Heart
                size={17}
                fill={wishlist.includes(product.id) ? "currentColor" : "none"}
              />
            </button>
          </div>
          <div className="mt-6 grid gap-2 text-xs text-gray-500">
            <p>SKU: 199575187796</p>
            <p>Categories: House Plants</p>
            <p>Tags: Home, Garden, Plants</p>
            <div className="mt-1 flex items-center gap-3">
              Share this products: <Facebook size={14} />
              <Linkedin size={14} />
              <Mail size={14} />
            </div>
          </div>
        </div>
      </div>

      <section className="container-shop mt-16">
        <div className="flex gap-8 border-b border-gray-100 text-sm font-medium">
          <button
            onClick={() => setTab("description")}
            className={`pb-3 ${tab === "description" ? "border-b-2 border-green-500 text-green-500" : ""}`}
          >
            Product Description
          </button>
          <button
            onClick={() => setTab("reviews")}
            className={`pb-3 ${tab === "reviews" ? "border-b-2 border-green-500 text-green-500" : ""}`}
          >
            Reviews (19)
          </button>
        </div>
        {tab === "description" ? (
          <div className="py-6 text-xs leading-6 text-gray-500">
            <p>
              The ceramic cylinder planters come with a wooden stand to help
              elevate your plants off the ground. The ceramic cylinder planters
              come with a wooden stand to help elevate your plants off the
              ground.
            </p>
            <p className="mt-4">
              The ceramic cylinder planters are available in different shapes
              and finishes. Place them near windows, in living rooms, offices
              and bedrooms to add a fresh natural touch.
            </p>
            <h4 className="mt-5 font-bold text-gray-700">Living Room:</h4>
            <p>
              Our plants bring an elegant natural feel and make the room more
              comfortable.
            </p>
            <h4 className="mt-4 font-bold text-gray-700">Dining Room:</h4>
            <p>
              Plants improve mood and make shared spaces feel fresh and
              welcoming.
            </p>
            <h4 className="mt-4 font-bold text-gray-700">Office:</h4>
            <p>
              Green plants can make workspaces feel calmer and more productive.
            </p>
          </div>
        ) : (
          <div className="py-8 text-sm text-gray-500">
            Customer reviews will appear here. ★★★★★
          </div>
        )}
      </section>

      <section className="container-shop mt-14">
        <h2 className="text-lg font-bold">Related Products</h2>
        <div className="mt-7 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {products.slice(3, 8).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </>
  );
}
