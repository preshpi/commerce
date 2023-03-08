import Link from "next/link";
import FavouriteButton from "./FavouriteButton";

export default function Product({ name, price, permalink }) {
  return (
    <>
      <div className="flex items-between justify-between mt-3 w-full">
        <Link
          href={`/products/${permalink}`}
          className="hover:underline hover:font-bold cursor-pointer"
        >
          {name}
        </Link>
        <FavouriteButton className="cursor-pointer" />
      </div>

      <p className="mt-[2%]">{price.formatted_with_symbol}</p>
    </>
  );
}