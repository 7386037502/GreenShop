import { Heart, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useShop } from "../context/ShopContext";

export default function ProductCard({ product }) {
  const { addToCart, wishlist, toggleWishlist } = useShop();
  const wished = wishlist.includes(product.id);

  return (
    <article className="group relative">
      <Link
        to={`/product/${product.id}`}
        className="relative block overflow-hidden bg-green-50"
      >
        {product.tag && (
          <span className="absolute left-0 top-0 z-10 bg-green-500 px-2 py-1 text-[11px] font-bold text-white">
            {product.tag}
          </span>
        )}
        <img
          src={product.image}
          alt={product.name}
          className="aspect-square w-full object-cover mix-blend-multiply transition duration-500 group-hover:scale-105"
        />
        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2 opacity-0 transition group-hover:opacity-100">
          <button
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
            className="grid h-9 w-9 place-items-center rounded-full bg-white text-green-500 shadow"
          >
            <ShoppingCart size={16} />
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              toggleWishlist(product.id);
            }}
            className={`grid h-9 w-9 place-items-center rounded-full bg-white shadow ${wished ? "text-red-500" : "text-green-500"}`}
          >
            <Heart size={16} fill={wished ? "currentColor" : "none"} />
          </button>
        </div>
      </Link>
      <Link
        to={`/product/${product.id}`}
        className="mt-3 block text-sm text-gray-700 hover:text-green-500"
      >
        {product.name}
      </Link>
      <div className="mt-1 flex items-center gap-2">
        <span className="text-sm font-bold text-green-500">
          ${product.price.toFixed(2)}
        </span>
        {product.oldPrice && (
          <del className="text-xs text-gray-400">
            ${product.oldPrice.toFixed(2)}
          </del>
        )}
      </div>
    </article>
  );
}
