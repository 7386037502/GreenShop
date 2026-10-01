import Breadcrumb from "../components/Breadcrumb";
import { Link } from "react-router-dom";

const posts = [
  [
    "Cactus & Succulent Care Tips",
    "Cacti and succulents are easy-care plants for any home or patio.",
    "01.png",
  ],
  [
    "Top 10 Succulents for Your Home",
    "Best in hanging baskets. Prefers medium to high light.",
    "02.png",
  ],
  [
    "Cacti & Succulent Care Tips",
    "Cacti and succulents are thrive in containers and because most are..",
    "03.png",
  ],
  [
    "Best Houseplants Room By Room",
    "The benefits of houseplants are endless. In addition to..",
    "04.png",
  ],
];

export default function Blogs() {
  return (
    <>
      <Breadcrumb items={["Blogs"]} />

      <div className="container-shop">
        <div className="text-center">
          <h1 className="text-3xl font-bold">
            Our Blog
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Plant care, gardening ideas and GreenShop news.
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4">
          {posts.map((p, i) => (
            <article
              key={p[0]}
              className="overflow-hidden border border-gray-100 bg-white"
            >
              <img
                src={p[2]}
                alt=""
                className="h-52 w-full object-cover"
              />

              <div className="p-5">
                <p className="text-[11px] text-gray-400">
                  September {12 + i} · {i + 2} min read
                </p>

                <h2 className="mt-2 font-bold">
                  {p[0]}
                </h2>

                <p className="mt-2 text-xs leading-5 text-gray-500">
                  {p[1]}
                </p>

                <Link
                  to="/blogs"
                  className="mt-4 inline-block text-xs font-semibold text-green-500"
                >
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}