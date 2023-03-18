import commerce from "../../lib/commerce";
import ProductList from "../../components/ProductList";
import Head from "next/head";
import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Countdown from "../../components/Countdown";
import Footer from "../../components/Footer";
import { useState } from "react";

export async function getStaticProps({ params }) {
  const { slug } = params;

  const category = await commerce.categories.retrieve(slug, {
    type: "slug",
  });

  const { data: products } = await commerce.products.list({
    category_slug: [slug],
  });

  return {
    props: {
      category,
      products,
    },
  };
}

export async function getStaticPaths() {
  const { data: categories } = await commerce.categories.list();

  return {
    paths: categories.map((category) => ({
      params: {
        slug: category.slug,
      },
    })),
    fallback: false,
  };
}

export default function CategoryPage({ products, category }) {
  const [search, setSearch] = useState("");
  const [notAvailableMessage, setNotAvailableMessage] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(2000);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    if (filteredProducts.length === 0) {
      setNotAvailableMessage("Item not available");
    } else {
      setNotAvailableMessage("");
    }
  };


  const handleMinPrice = (e) => {
    const value = e.target.value;
    if (/^\d+$/.test(value) || value === "") {
      setMinPrice(parseInt(value));
    }
  };

  const handleMaxPrice = (e) => {
    const value = e.target.value;
    if (/^\d+$/.test(value) || value === "") {
      setMaxPrice(parseInt(value));
    }
  };



  const filteredProducts = products.filter(
    (product) =>
      product.price.raw >= minPrice &&
      product.price.raw <= maxPrice && // filter based on price range
      product.name.toLowerCase().includes(search.toLowerCase())
  );

 
  return (
    <>
      <Head>
        <title> FlairStyle | categories</title>
        <meta name="keywords" content="FlairStyle" />
      </Head>

      <div className=" text-white text-center bg-[#ee3a3a] p-5">
        <div className="justify-between flex items-center w-[80%] mx-auto">
          <div className="w-[200px] h-20 lg:block hidden">
            <iframe
              src="https://giphy.com/embed/kGFZW7Xa6Hpe9peWjM"
              width="100%"
              height="100%"
              allowFullScreen
            ></iframe>
          </div>

          <div className="grid place-items-center justify-center">
            <h1 className="font-bold">Deal of the Day: 30% Off</h1>
            <Countdown />
            <button className="rounded-md px-2 py-2 text-white bg-black mt-3 hover:opacity-75">
              Shop Now
            </button>
          </div>

          <div className="w-[100px] h-20 lg:block hidden">
            <iframe
              src="https://giphy.com/embed/iJmkasWu2ECDfFmssu"
              width="100%"
              height="100%"
              className="giphy-embed"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      <div className="w-[80%] mx-auto mb-3 p-3 flex items-center gap-2 text-sm mt-5">
        <span className="hover:underline text-gray-500">
          <Link href="/">Home </Link>
        </span>

        <span>
          <MdOutlineKeyboardArrowRight />
        </span>

        <span className="hover:underline text-gray-500">
          <Link href="/categories"> categories </Link>
        </span>

        <span>
          <MdOutlineKeyboardArrowRight />
        </span>
        <span className="font-[700]">{category.slug}</span>
      </div>

      <div className="w-[80%] mx-auto mt-5 lg:justify-between lg:items-between lg:flex items-center justify-center grid gap-[20px]">
        <div className="flex gap-[20px] items-start justify-start mt-4 lg:mt-0">
          <h2 className="text-lg mb-2">Price:</h2>
          <input
            type="number"
            id="minPrice"
            name="minPrice"
            value={minPrice}
            onChange={handleMinPrice}
            className="border w-[70px] py-1 text-center outline-none"
            placeholder="Min"
          />
          <p>-</p>
          <input
            type="number"
            id="maxPrice"
            name="maxPrice"
            value={maxPrice}
            onChange={handleMaxPrice}
            className="border w-[70px] py-1 text-center outline-none"
            placeholder="Max"
          />
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

      <div>
        {filteredProducts.length === 0 ? (
          <p className="text-black lg:h-[70vh] h-[50vh] flex items-center justify-center lg:text-5xl text-3xl uppercase font-semibold animate-pulse">
            Item <span className="text-[red] italic"> not </span> available
          </p>
        ) : (
          <ProductList products={filteredProducts} />
        )}
      </div>
      <Footer />
    </>
  );
}
