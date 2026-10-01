import { Link } from "react-router-dom";

export default function Breadcrumb({ items = [] }) {
  return (
    <div className="container-shop py-5 text-xs text-gray-500">
      <Link to="/" className="font-medium text-gray-700">
        Home
      </Link>
      {items.map((item, i) => (
        <span key={i}>
          {" "}
          <span className="px-1">/</span> {item}
        </span>
      ))}
    </div>
  );
}
