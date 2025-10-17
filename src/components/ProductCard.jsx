import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

export default function ProductCard({ id, title, price, image, rating }) {
  return (
    <div className="border rounded-lg shadow-lg overflow-hidden flex flex-col">
      <div className="p-4 bg-white">
        <img src={image} alt={title} className="w-full h-48 object-contain" />
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-bold text-lg h-14 truncate whitespace-normal">
          {title}
        </h3>

        <p className="text-green-600 font-semibold text-xl my-2">
          R$ {price.toFixed(2)}
        </p>

        <div className="flex items-center mb-4">
          {Array.from({ length: 5 }, (_, index) => (
            <FaStar
              key={index}
              className={
                index < Math.round(rating.rate)
                  ? "text-yellow-500"
                  : "text-gray-300"
              }
            />
          ))}
          <span className="text-gray-500 text-sm ml-2">
            ({rating.count} avaliações)
          </span>
        </div>

        <Link to={`/produto/${id}`} className="mt-auto">
          <div className="text-center p-2 bg-blue-600 text-white rounded font-medium hover:bg-blue-700">
            Ver Detalhes
          </div>
        </Link>
      </div>
    </div>
  );
}