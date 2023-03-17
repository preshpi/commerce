import commerce from "../lib/commerce";
import ProductList from "../components/ProductList";
import Footer from "../components/Footer";
import Head from "next/head";
import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useState } from "react";
export async function getStaticProps() {
  const { data: products } = await commerce.products.list();

  return {
    props: {
      products,
    },
  };
}

export default function ProductsPage({ products }) {
  const [search, setSearch] = useState("");
  const [notAvailableMessage, setNotAvailableMessage] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
    if (filteredProducts.length === 0) {
      setNotAvailableMessage("Item not available");
    } else {
      setNotAvailableMessage("");
    }
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Head>
        <title> FlairStyle | products </title>
        <meta name="keywords" content="FlairStyle" />
      </Head>

      <div className="w-[80%] mx-auto">
        <div className="pt-6 flex items-center gap-2 text-sm">
          <span className="hover:underline text-gray-500">
            <Link href="/">Home</Link>
          </span>
          <span>
            <MdOutlineKeyboardArrowRight />
          </span>
          <span className="font-bold">Products</span>
        </div>
      </div>

      <div className="w-[80%] mx-auto mt-5 lg:justify-between lg:items-between lg:flex items-center justify-center grid gap-[20px]">
        <div>
          <p className="disabled">Filter By Price</p>
        </div>
        <form>
          <input
            type="search"
            value={search}
            onChange={handleSearch}
            className="border w-[300px] py-2 pr-12 px-4 outline-none"
            placeholder="Search products"
          />
        </form>
      </div>
      {filteredProducts.length === 0 ? (
        <p className="text-black h-[70vh] flex items-center justify-center text-5xl uppercase font-semibold animate-pulse">
          Item{" "} <span className="text-[red] italic"> not </span>{" "} available
        </p>
      ) : (
        <ProductList products={filteredProducts} />
      )}

      <Footer />
    </>
  );
}
