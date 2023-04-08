import Link from "next/link";
import Image from "next/image";
import Product from "./Product";
import { useState } from "react";
import commerce from "../lib/commerce";
import toast, { Toaster } from "react-hot-toast";

export default function ProductList({ products }) {
  const displayedProducts = products;


  return (
    <div className="lg:w-full mx-auto place-items-center grid justify-center mt-[5%] mb-[40px]">
      <ul className="gap-[30px] grid lg:grid-cols-4 md:grid-cols-2">
        {displayedProducts.map((product) => (
          <li key={product.permalink}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleAddToCart = () => {
    commerce.cart
      .add(product.id, 1)
      .then((item) => {
        toast.success(`Added ${product.name} to cart!`);
      })
      .catch((error) => {
        console.log(
          `There was an error adding ${product.name} to the cart:`,
          error
        );
      });
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link href={`/products/${product.permalink}`}>
        <figure className="lg:w-[300px] lg:h-[400px] w-[300px] h-[300px] relative">
          <Image
            src={`${product.image.url}`}
            alt="clothes"
            fill
            sizes="300"
            priority={true}
            className="object-cover"
          />
        </figure>
      </Link>

      {isHovered && (
        <div className="w-full bottom-[35%] absolute flex items-center justify-center">
          <button
            className="bg-white opacity-75 px-8 py-2 text-black"
            onClick={handleAddToCart}
          >
            Add to cart
          </button>
          <Toaster />
        </div>
      )}

      <Product {...product} />
    </div>
  );
}
