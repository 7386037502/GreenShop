import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import FeatureStrip from "../components/FeatureStrip";
import { useShop } from "../context/ShopContext";

/* ================= HERO SLIDES ================= */

const slides = [
  {
    largeImage: "/011.png",
    smallImage: "/011.png",
    alt: "GreenShop plants",
  },
  {
    largeImage: "/011.png",
    smallImage: "/011.png",
    alt: "GreenShop plants",
  },
  {
    largeImage: "/011.png",
    smallImage: "/011.png",
    alt: "GreenShop plants",
  },
];

export default function Home() {
  const { products } = useShop();

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  /* ================= AUTO SLIDER ================= */

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const slide = slides[currentSlide];

  return (
    <>
      {/* =====================================================
          HERO / MAIN BANNER
          ===================================================== */}

      <section
        className="
          relative
          mx-auto
          mt-[42px]
          h-[518px]
          w-full
          max-w-[1411px]
          overflow-hidden
          bg-[#f5f8f6]
        "
      >
        <div
          className="
            relative
            mx-auto
            w-full
            max-w-[1211px]
            min-h-[518px]
            overflow-hidden
          "
        >
          {/* LEFT ARROW */}

          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous slide"
            className="
              absolute
              left-0
              top-1/2
              z-30
              flex
              h-9
              w-9
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              bg-white
              text-xl
              text-[#374151]
              shadow-sm
              transition
              hover:bg-[#46a358]
              hover:text-white
              sm:left-2
              md:left-0
            "
          >
            ‹
          </button>

          {/* RIGHT ARROW */}

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next slide"
            className="
              absolute
              right-0
              top-1/2
              z-30
              flex
              h-9
              w-9
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              bg-white
              text-xl
              text-[#374151]
              shadow-sm
              transition
              hover:bg-[#46a358]
              hover:text-white
              sm:right-2
              md:right-0
            "
          >
            ›
          </button>

          {/* SLIDE */}

          <div
            key={currentSlide}
            className="
              grid
              min-h-[518px]
              grid-cols-1
              items-center
              md:grid-cols-[48%_52%]
            "
          >
            {/* LEFT CONTENT */}

            <div
              className="
                order-2
                z-20
                px-7
                pb-20
                pt-8
                sm:px-10
                md:order-1
                md:px-[35px]
                md:pb-10
                lg:px-[36px]
              "
            >
              <p
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.22em]
                  text-[#6b7280]
                  sm:text-xs
                "
              >
                Welcome to GreenShop
              </p>

              <h1
                className="
                  mt-3
                  max-w-[500px]
                  text-[38px]
                  font-extrabold
                  uppercase
                  leading-[1.03]
                  tracking-[-1.5px]
                  text-[#1f2937]
                  sm:text-[46px]
                  md:text-[48px]
                  lg:text-[52px]
                "
              >
                Let's make a
                <br />
                better <span className="text-[#46a358]">plant</span>
              </h1>

              <p
                className="
                  mt-5
                  max-w-[500px]
                  text-xs
                  leading-5
                  text-[#727c8b]
                  sm:text-sm
                  sm:leading-6
                "
              >
                We are an online plant shop offering a wide range of cheap and
                trendy plants. Use our plants to create your unique Urban
                Jungle. Order your favorite plants!
              </p>

              <Link
                to="/shop"
                className="
                  mt-6
                  inline-flex
                  h-[42px]
                  items-center
                  justify-center
                  rounded-[4px]
                  bg-[#46a358]
                  px-7
                  text-xs
                  font-bold
                  uppercase
                  text-white
                  transition
                  hover:bg-[#398b49]
                  sm:mt-7
                "
              >
                Shop Now
              </Link>
            </div>

            {/* RIGHT PLANTS */}

            <div
              className="
                relative
                order-1
                flex
                min-h-[290px]
                items-center
                justify-center
                md:order-2
                md:min-h-[518px]
              "
            >
              {/* LARGE PLANT */}

              <img
                src={slide.largeImage}
                alt={slide.alt}
                className="
                  absolute
                  right-[8%]
                  top-1/2
                  z-10
                  h-[285px]
                  w-[285px]
                  -translate-y-1/2
                  object-contain
                  sm:h-[350px]
                  sm:w-[350px]
                  md:right-[8%]
                  md:h-[430px]
                  md:w-[430px]
                  lg:right-[9%]
                  lg:h-[455px]
                  lg:w-[455px]
                "
              />

              {/* SMALL PLANT */}

              <img
                src={slide.smallImage}
                alt=""
                aria-hidden="true"
                className="
                  absolute
                  bottom-[55px]
                  left-[52%]
                  z-20
                  h-[65px]
                  w-[65px]
                  object-contain
                  sm:bottom-[65px]
                  sm:h-[80px]
                  sm:w-[80px]
                  md:bottom-[60px]
                  md:left-[15%]
                  md:h-[110px]
                  md:w-[110px]
                  lg:left-[24%]
                  lg:h-[120px]
                  lg:w-[120px]
                "
              />
            </div>
          </div>

          {/* SLIDER DOTS */}

          <div
            className="
              absolute
              bottom-5
              left-1/2
              z-30
              flex
              -translate-x-1/2
              items-center
              gap-1.5
            "
          >
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`
                  h-1.5
                  w-1.5
                  rounded-full
                  transition-all
                  ${
                    currentSlide === index ? "w-2 bg-[#46a358]" : "bg-[#b8dfc0]"
                  }
                `}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          OUR PLANTS
          ===================================================== */}

      <section className="container-shop mt-14">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-[#3d3d3d]">Our Plants</h2>

            <p className="mt-1 text-xs text-gray-500">
              Choose from our most loved house plants
            </p>
          </div>

          <Link to="/shop" className="text-sm font-semibold text-[#46a358]">
            View All
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
          {products.slice(0, 5).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* =====================================================
          PROMO CARDS
          CHANGED TO MATCH YOUR 1ST IMAGE
          ===================================================== */}

      <section
        className="
          container-shop
          mt-20
          grid
          grid-cols-1
          gap-4
          sm:grid-cols-2
          ]
        "
      >
        <PromoCard
          image="image 7.png"
          title="SUMMER CACTUS & SUCCULENTS"
        />

        <PromoCard
          image="image 15.png"
          title="STYLING TRENDS & MUCH MORE"
        />
      </section>

      {/* =====================================================
          BLOG
          ===================================================== */}

      <section className="container-shop mt-20">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#3d3d3d]">Our Blog Posts</h2>

          <p className="mt-2 text-sm text-gray-500">
            We are an online plant shop offering a wide range of cheap and
            trendy plants.
          </p>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* BLOG 1 */}

          <article className="overflow-hidden bg-green-50">
            <img
              src="/01.png"
              alt="Cactus & Succulent Care Tips"
              className="h-44 w-full object-cover"
            />

            <div className="p-4">
              <p className="text-[11px] text-gray-500">
                September 12 · 6 min read
              </p>

              <h3 className="mt-2 font-bold text-[#3d3d3d]">
                Cactus &amp; Succulent Care Tips
              </h3>

              <p className="mt-2 text-xs leading-5 text-gray-500">
                Cacti are succulents and are easy care plants for any home or
                patio.
              </p>

              <Link
                to="/blogs"
                className="mt-3 inline-block text-xs font-semibold text-[#46a358]"
              >
                Read More →
              </Link>
            </div>
          </article>

          {/* BLOG 2 */}

          <article className="overflow-hidden bg-green-50">
            <img
              src="/02.png"
              alt="Top 10 Succulents for Your Home"
              className="h-44 w-full object-cover"
            />

            <div className="p-4">
              <p className="text-[11px] text-gray-500">
                September 13 · 6 min read
              </p>

              <h3 className="mt-2 font-bold text-[#3d3d3d]">
                Top 10 Succulents for Your Home
              </h3>

              <p className="mt-2 text-xs leading-5 text-gray-500">
                Best in hanging baskets. Prefers medium to high light.
              </p>

              <Link
                to="/blogs"
                className="mt-3 inline-block text-xs font-semibold text-[#46a358]"
              >
                Read More →
              </Link>
            </div>
          </article>

          {/* BLOG 3 */}

          <article className="overflow-hidden bg-green-50">
            <img
              src="/03.png"
              alt="Cacti & Succulent Care Tips"
              className="h-44 w-full object-cover"
            />

            <div className="p-4">
              <p className="text-[11px] text-gray-500">
                September 15 · 6 min read
              </p>

              <h3 className="mt-2 font-bold text-[#3d3d3d]">
                Cacti &amp; Succulent Care Tips
              </h3>

              <p className="mt-2 text-xs leading-5 text-gray-500">
                Cacti and succulents thrive in containers and because most
                are...
              </p>

              <Link
                to="/blogs"
                className="mt-3 inline-block text-xs font-semibold text-[#46a358]"
              >
                Read More →
              </Link>
            </div>
          </article>

          {/* BLOG 4 */}

          <article className="overflow-hidden bg-green-50">
            <img
              src="/04.png"
              alt="Best Houseplants Room By Room"
              className="h-44 w-full object-cover"
            />

            <div className="p-4">
              <p className="text-[11px] text-gray-500">
                September 17 · 6 min read
              </p>

              <h3 className="mt-2 font-bold text-[#3d3d3d]">
                Best Houseplants Room By Room
              </h3>

              <p className="mt-2 text-xs leading-5 text-gray-500">
                The benefits of houseplants are endless. In addition to...
              </p>

              <Link
                to="/blogs"
                className="mt-3 inline-block text-xs font-semibold text-[#46a358]"
              >
                Read More →
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* FEATURES */}

      <FeatureStrip />
    </>
  );
}

/* =========================================================
   PROMO CARD
   MATCHES YOUR 1ST SCREENSHOT
   ========================================================= */


/* =========================================================
   PROMO CARD
   ========================================================= */

function PromoCard({ image, title }) {
  return (
    <div
      className="
        relative
        flex
        h-[252px]
        w-full
        overflow-hidden
        bg-[#f5f8f6]
      "
    >
      {/* ================= IMAGE ================= */}
      <div
        className="
          relative
          h-full
          w-[48%]
          overflow-hidden
        "
      >
        <img
          src={image}
          alt={title}
          className="
            h-full
            w-full
            object-cover
          "
        />

        {/* IMAGE LIGHT OVERLAY */}
        <div className="pointer-events-none absolute inset-0 bg-white/10" />

        {/* GREEN CURVE */}
        <div
          className="
            pointer-events-none
            absolute
            -bottom-12
            -left-10
            h-24
            w-24
            rounded-full
            border
            border-[#46a358]
          "
        />
      </div>

      {/* ================= CONTENT ================= */}
      <div
        className="
          flex
          w-[52%]
          flex-col
          justify-center
          px-4
          py-2
          sm:px-5
        "
      >
        <h3
          className="
            max-w-[190px]
            text-[9px]
            font-extrabold
            uppercase
            leading-3
            text-[#333333]
            sm:text-[10px]
            sm:leading-4
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-1
            max-w-[205px]
            text-[7px]
            leading-3
            text-[#777777]
            sm:text-[8px]
          "
        >
          We are an online plant shop offering a wide range of cheap and
          trendy plants.
        </p>

        <Link
          to="/shop"
          className="
            mt-1.5
            inline-flex
            w-fit
            items-center
            rounded-[3px]
            bg-[#46a358]
            px-2.5
            py-1
            text-[7px]
            font-semibold
            text-white
            transition
            hover:bg-[#398b49]
            sm:mt-2
            sm:px-3
            sm:py-1.5
            sm:text-[8px]
          "
        >
          Find More →
        </Link>
      </div>
    </div>
  );
}