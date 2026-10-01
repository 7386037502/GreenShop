import { useState } from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleJoin = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setMessage("Please enter your email address.");
      return;
    }

    if (!email.includes("@")) {
      setMessage("Please enter a valid email address.");
      return;
    }

    setMessage("Thank you for joining our newsletter!");
    setEmail("");
  };

  return (
    <footer className="mt-20">
      <div className="container-shop overflow-hidden">

        {/* =========================================================
            FEATURE + NEWSLETTER
            ========================================================= */}
        <div
          className="
            mx-auto
            mt-8
            grid
            w-full
            min-h-[220px]
            grid-cols-1
            border-[#46a358]
            bg-white
            sm:grid-cols-3
            lg:grid-cols-4
          "
        >

          {/* =====================================================
              GARDEN CARE
              ===================================================== */}
          <div
            className="
              min-h-[220px]
              border-b
              border-gray-200
              px-6
              py-6
              sm:border-b-0
              sm:border-r
            "
          >

            {/* IMAGE AREA */}
            <div className="relative mb-4 h-[80px] w-[85px]">

              {/* BACKGROUND CIRCLE */}
              <div
                className="
                  absolute
                  left-0
                  top-[12px]
                  h-[62px]
                  w-[62px]
                  rounded-full
                  bg-[#e8f5e9]
                "
              />

              {/* PLANT FRAME */}
              <img
                src="/Frame.png"
                alt="Garden Care Plant"
                className="
                  absolute
                  left-[10px]
                  bottom-[15px]
                  top-0
                  z-10
                  h-[50px]
                  w-[65px]
                  object-contain
                "
              />

              {/* POT FRAME */}
              <img
                src="/Frame 1.png"
                alt="Garden Care Pot"
                className="
                  absolute
                  left-[8px]
                  top-[25px]
                  z-20
                  h-[50px]
                  w-[65px]
                  object-contain
                "
              />
            </div>

            {/* TITLE */}
            <h4
              className="
                text-[15px]
                font-bold
                leading-5
                text-gray-800
              "
            >
              Garden Care
            </h4>

            {/* DESCRIPTION */}
            <p
              className="
                mt-2
                max-w-[210px]
                text-[11px]
                leading-[17px]
                text-gray-500
              "
            >
              We are an online plant shop offering a wide range of cheap and
              trendy plants.
            </p>
          </div>


          {/* =====================================================
              PLANT RENOVATION
              ===================================================== */}
          <div
            className="
              min-h-[220px]
              border-b
              border-gray-200
              px-6
              py-6
              sm:border-b-0
              sm:border-r
            "
          >

            {/* IMAGE AREA */}
            <div className="relative mb-4 h-[80px] w-[85px]">

              {/* BACKGROUND CIRCLE */}
              <div
                className="
                  absolute
                  left-0
                  top-[12px]
                  h-[62px]
                  w-[62px]
                  rounded-full
                  bg-[#e8f5e9]
                "
              />

              {/* PLANT RENOVATION IMAGE */}
              <img
                src="/Group 18.png"
                alt="Plant Renovation"
                className="
                  absolute
                  left-[4px]
                  top-0
                  z-10
                  h-[75px]
                  w-[75px]
                  object-contain
                "
              />
            </div>

            {/* TITLE */}
            <h4
              className="
                text-[15px]
                font-bold
                leading-5
                text-gray-800
              "
            >
              Plant Renovation
            </h4>

            {/* DESCRIPTION */}
            <p
              className="
                mt-2
                max-w-[210px]
                text-[11px]
                leading-[17px]
                text-gray-500
              "
            >
              We are an online plant shop offering a wide range of cheap and
              trendy plants.
            </p>
          </div>


          {/* =====================================================
              WATERING GARDEN
              ===================================================== */}
          <div
            className="
              min-h-[220px]
              border-b
              border-gray-200
              px-6
              py-6
              sm:border-b-0
              sm:border-r
            "
          >

            {/* IMAGE AREA */}
            <div className="relative mb-4 h-[80px] w-[85px]">

              {/* BACKGROUND CIRCLE */}
              <div
                className="
                  absolute
                  left-0
                  top-[12px]
                  h-[62px]
                  w-[62px]
                  rounded-full
                  bg-[#e8f5e9]
                "
              />

              {/* WATERING GARDEN IMAGE */}
              <img
                src="/Group 19.png"
                alt="Watering Garden"
                className="
                  absolute
                  left-[4px]
                  top-0
                  z-10
                  h-[75px]
                  w-[75px]
                  object-contain
                "
              />
            </div>

            {/* TITLE */}
            <h4
              className="
                text-[15px]
                font-bold
                leading-5
                text-gray-800
              "
            >
              Watering Garden
            </h4>

            {/* DESCRIPTION */}
            <p
              className="
                mt-2
                max-w-[210px]
                text-[11px]
                leading-[17px]
                text-gray-500
              "
            >
              We are an online plant shop offering a wide range of cheap and
              trendy plants.
            </p>
          </div>


          {/* =====================================================
              NEWSLETTER
              ===================================================== */}
          <div
            className="
              min-h-[220px]
              px-6
              py-6
            "
          >

            {/* TITLE */}
            <h4
              className="
                text-[15px]
                font-bold
                leading-5
                text-gray-800
              "
            >
              Would you like to join newsletters?
            </h4>

            {/* EMAIL FORM */}
            <form
              onSubmit={handleJoin}
              className="
                mt-5
                flex
                h-[38px]
                w-full
              "
            >
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setMessage("");
                }}
                placeholder="enter your email address..."
                className="
                  min-w-0
                  flex-1
                  border
                  border-gray-200
                  px-3
                  text-[10px]
                  text-gray-600
                  outline-none
                  placeholder:text-gray-400
                  focus:border-green-500
                "
              />

              <button
                type="submit"
                className="
                  w-[65px]
                  bg-[#46a358]
                  text-[10px]
                  font-semibold
                  text-white
                  transition
                  hover:bg-green-600
                "
              >
                Join
              </button>
            </form>

            {/* SUCCESS / ERROR MESSAGE */}
            {message && (
              <p
                className="
                  mt-2
                  text-[9px]
                  font-medium
                  text-green-600
                "
              >
                {message}
              </p>
            )}

            {/* NEWSLETTER DESCRIPTION */}
            <p
              className="
                mt-4
                text-[10px]
                leading-[16px]
                text-gray-500
              "
            >
              We usually post offers and challenges in newsletter. We offer a
              wide range of houseplants and accessories shipped directly from
              our (green)house to yours!
            </p>
          </div>
        </div>


        {/* =========================================================
            CONTACT BAR
            ========================================================= */}
        <div
          className="
            grid
            gap-5
            bg-green-100
            px-6
            py-6
            text-sm
            text-gray-600
            sm:grid-cols-3
          "
        >

          {/* LOGO */}
          <div className="flex items-center">
            <Link
              to="/"
              className="flex items-center gap-2"
            >
              <img
                src="/Vector.png"
                alt="GreenShop logo"
                className="h-9 w-9 object-contain"
              />

              <span
                className="
                  text-lg
                  font-extrabold
                  tracking-tight
                  text-green-500
                "
              >
                GREENSHOP
              </span>
            </Link>
          </div>


          {/* ADDRESS */}
          <div className="flex items-center gap-2">
            <MapPin size={18} />

            <span>
              70 West Buckingham Ave.
              <br />
              Farmingdale, NY 11735
            </span>
          </div>


          {/* EMAIL + PHONE */}
          <div
            className="
              flex
              flex-col
              gap-3
              sm:items-end
            "
          >
            <span className="flex items-center gap-2">
              <Mail size={17} />
              contact@greenshop.com
            </span>

            <span className="flex items-center gap-2">
              <Phone size={17} />
              +88 01911 717 490
            </span>
          </div>
        </div>


        {/* =========================================================
            FOOTER LINKS
            ========================================================= */}
        <div
          className="
            grid
            gap-8
            border-b
            border-gray-100
            bg-white
            px-6
            py-8
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >

          {/* MY ACCOUNT */}
          <FooterColumn
            title="My Account"
            links={[
              "My Account",
              "Our stores",
              "Contact us",
              "Career",
              "Specials",
            ]}
          />


          {/* HELP & GUIDE */}
          <FooterColumn
            title="Help & Guide"
            links={[
              "Help Center",
              "How to Buy",
              "Shipping & Delivery",
              "Product Policy",
              "How to Return",
            ]}
          />


          {/* CATEGORIES */}
          <FooterColumn
            title="Categories"
            links={[
              "House Plants",
              "Potter Plants",
              "Seeds",
              "Small Plants",
              "Accessories",
            ]}
          />


          {/* SOCIAL MEDIA + PAYMENT */}
          <div>
            <h4 className="font-bold text-gray-800">
              Social Media
            </h4>

            <div className="mt-4 flex gap-2">
              {[Facebook, Instagram, Linkedin, Mail].map(
                (Icon, i) => (
                  <span
                    key={i}
                    className="
                      grid
                      h-8
                      w-8
                      place-items-center
                      rounded
                      border
                      border-gray-100
                      text-green-500
                    "
                  >
                    <Icon size={15} />
                  </span>
                )
              )}
            </div>


            {/* PAYMENT */}
            <h4 className="mt-6 font-bold text-gray-800">
              We accept
            </h4>

            <div className="mt-3">
              <img
                src="/image 16.png"
                alt="Payment Methods"
                className="h-8 w-auto object-contain"
              />
            </div>
          </div>
        </div>


        {/* =========================================================
            COPYRIGHT
            ========================================================= */}
        <div className="py-5 text-center text-sm text-gray-500">
          © 2021 GreenShop. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}


/* =========================================================
   FOOTER COLUMN
   ========================================================= */

function FooterColumn({ title, links }) {
  return (
    <div>
      <h4 className="font-bold text-gray-800">
        {title}
      </h4>

      <div className="mt-4 grid gap-3 text-sm text-gray-500">
        {links.map((x) => (
          <Link
            key={x}
            to="/shop"
            className="transition hover:text-green-500"
          >
            {x}
          </Link>
        ))}
      </div>
    </div>
  );
}