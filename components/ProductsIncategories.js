import Link from "next/link";
import Image from "next/image";
import Product from "./Product";
import { useState } from "react";

export default function ProductsInCategories({ products, onAddToCart }) {
  const displayedProducts = products;
  if (!products) return null;

  return (
    <div className="lg:w-[80%] md:w-[85%] mx-auto place-items-center grid justify-center lg:mt-[5%] mt-[15%] md:mt-[10%] mb-[40px]">
      <ul className="gap-[50px] md:gap-[30px] grid lg:grid-cols-4 md:grid-cols-3">
        {displayedProducts.map((product) => (
          <li key={product.permalink}>
            <ProductCard product={product} onAddToCart={onAddToCart} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProductCard({ product, onAddToCart }) {
  // hover on image to get add to cart
  const [isHovered, setIshovered] = useState(false);
  const handleMouseEnter = () => {
    setIshovered(true);
  };

  const handleMouseLeave = () => {
    setIshovered(false);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link href={`/products/${product.permalink}`}>
        <Image
          src={`${product.image.url}`}
          alt="clothes"
          width={300}
          height={300}
          loading="lazy"
          className="object-cover lg:w-[300px] lg:h-[300px] w-[300px] h-[300px] relative"
        />
      </Link>

      {isHovered && (
        <div className="w-full bottom-[35%] absolute flex items-center justify-center">
          <button
            onClick={() => onAddToCart(product.id, 1)}
            className="bg-white opacity-75 px-8 py-2 text-black"
          >
            Add to cart
          </button>
        </div>
      )}
      <Product {...product} />
    </div>
  );
}
