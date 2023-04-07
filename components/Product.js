import Link from "next/link";

export default function Product({ name, price, permalink }) {
  return (
    <>
      <div className="flex items-between justify-between mt-3 w-full">
        <Link
          href={`/products/${permalink}`}
          className="hover:underline font-[600] cursor-pointer"
        >
          {name}
        </Link>
      </div>
      <p className="mt-[2%]">{price.formatted_with_symbol}</p>
    </>
  );
}
