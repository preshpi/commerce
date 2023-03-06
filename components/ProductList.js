import Link from "next/link";

import Product from "./Product";

export default function ProductList({ products }) {
  const displayedProducts = products.slice(0, 12); // Display only the first 12 products

  if (!products) return null;

  return (
    <div className="w-[80%] mx-auto gap-[20px] place-items-center grid justify-center mt-[7%]">
      <ul className="gap-[30px] grid lg:grid-cols-4 md:grid-cols-2">
        {displayedProducts.map((product) => (
          <li key={product.permalink}>
            <Link href={`/products/${product.permalink}`}>
              <img
                src={product.image.url}
                alt="clothes"
                className="lg:w-[300px] lg:h-[300px] w-[250px] h-[250px] object-cover"
              />
              <Product {...product} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
