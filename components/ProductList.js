import Link from "next/link";
import Image from "next/image";
import Product from "./Product";
import { useState, useEffect } from "react";
import commerce from "../lib/commerce";
import { Skeleton } from "antd";

export default function ProductList({ products }) {
  const [loading, setLoading] = useState(!products);
  const displayedProducts = products;
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 10000); // Wait for 10 seconds before updating the loading state
  }, []);

  if (loading) {
    return (
      <div className="lg:w-full mx-auto place-items-center grid justify-center mt-[5%]">
        <ul className="gap-[30px] grid lg:grid-cols-4 md:grid-cols-2">
          {displayedProducts.map((_, index) => (
            <li key={index}>
              <Skeleton active />
            </li>
          ))}
        </ul>
      </div>
    );
  }

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
        console.log(`Added ${product.name} to cart:`, item);
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
            blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect x='0' y='0' width='200' height='200' fill='%23CCCCCC'/%3E%3C/svg%3E"
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
        </div>
      )}

      <Product {...product} />
    </div>
  );
}
