import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import ProductCard from "../components/ProductCard";
import { useShop } from "../context/ShopContext";

export default function Shop() {
  const { products } = useShop();
  const [params] = useSearchParams();

  const [category, setCategory] = useState("All Plants");
  const [sort, setSort] = useState("default");
  const [price, setPrice] = useState(200);
  const [currentPage, setCurrentPage] = useState(1);

  const search = params.get("search") || "";

  /* =========================================================
     SIDEBAR CATEGORIES
     ========================================================= */

  const categories = [
    "All Plants",
    "House Plants",
    "Potter Plants",
    "Seeds",
    "Small Plants",
    "Accessories",
  ];

  /* =========================================================
     TOP SHOP TABS
     ========================================================= */

  const shopTabs = ["All Plants", "New Arrivals", "Sale"];

  /* =========================================================
     FILTER PRODUCTS
     ========================================================= */

  const filtered = useMemo(() => {
    let list = [...products];

    /* SEARCH */
    if (search) {
      list = list.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase()),
      );
    }

    /* PRICE */
    list = list.filter((p) => p.price <= price);

    /* CATEGORY / TOP TABS */
    if (category === "New Arrivals") {
      list = list.filter((p) => p.tag === "NEW");
    } else if (category === "Sale") {
      list = list.filter((p) => p.oldPrice && p.oldPrice > p.price);
    } else if (category !== "All Plants") {
      list = list.filter((p) => p.category === category);
    }

    /* SORT */
    if (sort === "low") {
      list.sort((a, b) => a.price - b.price);
    }

    if (sort === "high") {
      list.sort((a, b) => b.price - a.price);
    }

    if (sort === "name") {
      list.sort((a, b) => a.name.localeCompare(b.name));
    }

    return list;
  }, [products, category, sort, price, search]);

  /* =========================================================
     PAGINATION
     ========================================================= */

  const productsPerPage = 3;

  const totalPages = Math.max(1, Math.ceil(filtered.length / productsPerPage));

  const startIndex = (currentPage - 1) * productsPerPage;

  const endIndex = startIndex + productsPerPage;

  const currentProducts = filtered.slice(startIndex, endIndex);

  /* =========================================================
     CHANGE CATEGORY
     ========================================================= */

  const handleCategoryChange = (value) => {
    setCategory(value);
    setCurrentPage(1);
  };

  /* =========================================================
     CHANGE SORT
     ========================================================= */

  const handleSortChange = (value) => {
    setSort(value);
    setCurrentPage(1);
  };

  /* =========================================================
     CHANGE PRICE
     ========================================================= */

  const handlePriceChange = (value) => {
    setPrice(value);
    setCurrentPage(1);
  };

  return (
    <>
      {/* =====================================================
          BREADCRUMB
          ===================================================== */}

      <Breadcrumb items={["Shop"]} />

      <div className="container-shop grid gap-8 lg:grid-cols-[240px_1fr]">
        {/* ===================================================
            LEFT SIDEBAR
            =================================================== */}

        <aside className="hidden bg-green-50 p-6 lg:block">
          <h3 className="font-bold text-gray-800">Categories</h3>

          <div className="mt-5 grid gap-4 text-sm">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => handleCategoryChange(c)}
                className={`text-left transition ${
                  category === c
                    ? "font-bold text-green-500"
                    : "text-gray-600 hover:text-green-500"
                }`}
              >
                {c}

                <span className="float-right text-xs text-gray-400">
                  (
                  {
                    products.filter((p) => {
                      if (c === "All Plants") {
                        return true;
                      }

                      return p.category === c;
                    }).length
                  }
                  )
                </span>
              </button>
            ))}
          </div>

          {/* =================================================
              PRICE RANGE
              ================================================= */}

          <h3 className="mt-10 font-bold text-gray-800">Price Range</h3>

          <input
            type="range"
            min="40"
            max="200"
            value={price}
            onChange={(e) => handlePriceChange(Number(e.target.value))}
            className="mt-5 w-full accent-green-500"
          />

          <p className="mt-2 text-xs text-gray-500">
            Price: <b>${price}.00</b>
          </p>

          <button className="btn-green mt-4 w-full text-xs">Filter</button>

          {/* =================================================
              SIZE
              ================================================= */}

          <h3 className="mt-10 font-bold text-gray-800">Size</h3>

          <div className="mt-4 grid gap-3 text-sm text-gray-600">
            <span>Small (12)</span>
            <span>Medium (6)</span>
            <span>Large (4)</span>
          </div>
        </aside>

        {/* ===================================================
            PRODUCTS SECTION
            =================================================== */}

        <section>
          {/* =================================================
              TOP TABS + SORT
              ================================================= */}

          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            {/* TOP TABS */}

            <div className="flex gap-6 overflow-x-auto text-sm">
              {shopTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleCategoryChange(tab)}
                  className={`whitespace-nowrap pb-2 transition ${
                    category === tab
                      ? "border-b-2 border-green-500 font-semibold text-green-500"
                      : "text-gray-500 hover:text-green-500"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* SORT */}

            <select
              value={sort}
              onChange={(e) => handleSortChange(e.target.value)}
              className="rounded border border-gray-200 px-3 py-2 text-xs outline-none"
            >
              <option value="default">Sort by: Default</option>

              <option value="low">Price: Low to High</option>

              <option value="high">Price: High to Low</option>

              <option value="name">Name</option>
            </select>
          </div>

          {/* =================================================
              SEARCH RESULT
              ================================================= */}

          {search && (
            <p className="mb-5 text-sm text-gray-500">
              Search results for <b>"{search}"</b>
            </p>
          )}

          {/* =================================================
              PRODUCT GRID
              ================================================= */}

          <div className="grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3">
            {currentProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>

          {/* =================================================
              NO PRODUCTS
              ================================================= */}

          {!filtered.length && (
            <div className="py-20 text-center text-sm text-gray-500">
              No plants found.
            </div>
          )}

          {/* =================================================
              PAGINATION
              ================================================= */}

          {filtered.length > 0 && (
            <div className="mt-12 flex justify-center gap-2">
              {/* PREVIOUS */}

              <button
                onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
                disabled={currentPage === 1}
                className={`grid h-9 w-9 place-items-center rounded border text-xs ${
                  currentPage === 1
                    ? "cursor-not-allowed border-gray-100 text-gray-300"
                    : "border-gray-200 text-gray-600 hover:border-green-500 hover:text-green-500"
                }`}
              >
                ‹
              </button>

              {/* PAGE NUMBERS */}

              {[1, 2, 3, 4].map((page) => (
                <button
                  key={page}
                  onClick={() => {
                    if (page <= totalPages) {
                      setCurrentPage(page);
                    }
                  }}
                  disabled={page > totalPages}
                  className={`grid h-9 w-9 place-items-center rounded border text-xs transition ${
                    currentPage === page
                      ? "border-green-500 bg-green-500 text-white"
                      : page > totalPages
                        ? "cursor-not-allowed border-gray-100 text-gray-300"
                        : "border-gray-200 text-gray-600 hover:border-green-500 hover:text-green-500"
                  }`}
                >
                  {page}
                </button>
              ))}

              {/* NEXT */}

              <button
                onClick={() =>
                  setCurrentPage((page) => Math.min(totalPages, page + 1))
                }
                disabled={currentPage === totalPages}
                className={`grid h-9 w-9 place-items-center rounded border text-xs ${
                  currentPage === totalPages
                    ? "cursor-not-allowed border-gray-100 text-gray-300"
                    : "border-gray-200 text-gray-600 hover:border-green-500 hover:text-green-500"
                }`}
              >
                ›
              </button>
            </div>
          )}
        </section>
      </div>
    </>
  );
}
