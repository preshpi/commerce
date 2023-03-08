import Link from "next/link";
import Image from "next/image";

import Product from "./Product";

export default function ProductList({ products }) {
  const displayedProducts = products.slice(0, 12); // Display only the first 12 products
  if (!products) return null;
  console.log(products);

  return (
    <div className="w-[80%] lg:w-[90%] mx-auto gap-[20px] place-items-center grid justify-center mt-[7%]">
      <ul className="gap-[30px] grid lg:grid-cols-4 md:grid-cols-2">
        {displayedProducts.map((product) => (
          <li key={product.permalink}>
            <Link href={`/products/${product.permalink}`}>
              <Image
                src={`${product.image.url}`}
                alt="clothes"
                width={300}
                height={300}
                loading="lazy"
                className="object-cover lg:w-[300px] lg:h-[300px] w-[350px] h-[250px]"
              />
            </Link>
              <Product {...product} />
          </li>
        ))}
      </ul>
    </div>
  );
}
