import { createContext, useContext, useMemo, useState } from "react";

const products = [
  {
    id: 1,
    name: "Barberton Daisy",
    price: 119,
    oldPrice: 149,
    category: "House Plants",
    image:
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=700&q=85",
    tag: "",
  },

  {
    id: 2,
    name: "Angel Wing Begonia",
    price: 89,
    oldPrice: 119,
    category: "Potter Plants",
    image:
      "https://images.unsplash.com/photo-1604762524889-3e2fcc145683?auto=format&fit=crop&w=700&q=85",
    tag: "",
  },

  {
    id: 3,
    name: "African Violet",
    price: 109,
    oldPrice: 129,
    category: "Small Plants",
    image:
      "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=700&q=85",
    tag: "13% OFF",
  },

  {
    id: 4,
    name: "Beach Spider Lily",
    price: 129,
    oldPrice: 149,
    category: "House Plants",
    image:
      "https://images.unsplash.com/photo-1598880940080-ff9a29891b85?auto=format&fit=crop&w=700&q=85",
    tag: "",
  },

  {
    id: 5,
    name: "Blushing Bromeliad",
    price: 139,
    oldPrice: 169,
    category: "Seeds",
    image: "/image 7.png",
    tag: "",
  },

  {
    id: 6,
    name: "Aluminum Plant",
    price: 179,
    oldPrice: 199,
    category: "Small Plants",
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=700&q=85",
    tag: "",
  },

  {
    id: 7,
    name: "Bird's Nest Fern",
    price: 99,
    oldPrice: 129,
    category: "House Plants",
    image: "/image 8.png",
    tag: "",
  },

  {
    id: 8,
    name: "Chinese Evergreen",
    price: 39,
    oldPrice: 59,
    category: "Small Plants",
    image:"Group 45.png",
     tag: "",
  },

  {
    id: 9,
    name: "Calathea White Star",
    price: 159,
    oldPrice: 189,
    category: "House Plants",
    image:"cathe.png",
    tag: "NEW",
  },

  {
    id: 10,
    name: "Peperomia Obtusifolia",
    price: 79,
    oldPrice: 99,
    category: "Potter Plants",
    image:
      "https://images.unsplash.com/photo-1534710961216-75c88202f43e?auto=format&fit=crop&w=700&q=85",
    tag: "",
  },
];

const ShopContext = createContext(null);

export function ShopProvider({ children }) {
  const [cart, setCart] = useState([
    {
      ...products[0],
      qty: 2,
    },
    {
      ...products[4],
      qty: 6,
    },
    {
      ...products[5],
      qty: 9,
    },
  ]);

  const [wishlist, setWishlist] = useState([]);
  const [user, setUser] = useState(null);
  const [coupon, setCoupon] = useState("");

  const addToCart = (product, qty = 1) => {
    setCart((prev) => {
      const found = prev.find((item) => item.id === product.id);

      if (found) {
        return prev.map((item) =>
          item.id === product.id
            ? {
                ...item,
                qty: item.qty + qty,
              }
            : item,
        );
      }

      return [
        ...prev,
        {
          ...product,
          qty,
        },
      ];
    });
  };

  const updateQty = (id, qty) => {
    if (qty < 1) {
      return removeFromCart(id);
    }

    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              qty,
            }
          : item,
      ),
    );
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  };

  const subtotal = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  }, [cart]);

  const discount = coupon.toUpperCase() === "GREEN10" ? subtotal * 0.1 : 0;

  const shipping = subtotal > 0 ? 16 : 0;

  const total = subtotal - discount + shipping;

  const value = {
    products,

    cart,
    wishlist,
    user,
    coupon,

    setCoupon,
    setUser,

    addToCart,
    updateQty,
    removeFromCart,
    toggleWishlist,

    subtotal,
    discount,
    shipping,
    total,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

export const useShop = () => useContext(ShopContext);
