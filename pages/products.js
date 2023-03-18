import commerce from "../lib/commerce";
import ProductList from "../components/ProductList";
import Footer from "../components/Footer";
import Head from "next/head";
import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useState } from "react";
import { Carousel } from "antd";

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
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(2000);
  const [notAvailableMessage, setNotAvailableMessage] = useState("");

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

  const carouselData = [
    {
      id: 1,
      text: "I don't always dress up, but when I do, I prefer to look fabulous.",
    },
    {
      id: 2,
      text: "My favorite hobby is going shopping on FLAIRSTYLE and telling myself I can't afford anything.",
    },
    {
      id: 3,
      text: "Fashion rule #1: Never be caught wearing the same outfit twice in a row... unless it's black.",
    },
    {
      id: 3,
      text: "I don't follow fashion trends. I let FLAIRSTYLE decide for me",
    },
    {
      id: 4,
      text: "Fashion is like a fruit, you have to change it frequently",
    },
    {
      id: 5,
      text: "You don't do fashion, you're am fashion.",
    },
    {
      id: 6,
      text: "I don't always know what to wear, but thanks to FlairStyle, I can pretend like I do",
    },
    {
      id: 7,
      text: "I'm not rich, I just have a fashion addiction.",
    },
    {
      id: 8,
      text: "If you're not wearing Yeezys, are you really even walking?",
    },
    {
      id: 9,
      text: "If you're looking for a good time, just follow the trail of my Ralph Lauren cologne.",
    },
    {
      id: 10,
      text: "Giorgio Armani: because sometimes you just need a suit that costs more than your car.",
    },
  ];

  return (
    <>
      <Head>
        <title> FlairStyle | products </title>
        <meta name="keywords" content="FlairStyle" />
      </Head>

      <Carousel autoplay dots={false}>
        {carouselData.map(({ text, id }) => (
          <div
            key={id}
            className="bg-gradient-to-r from-[#fed6e3] to-[#a8edea] lg:h-14 h-16"
          >
            <p className="flex items-center justify-center font-mono text-center p-3 text-[12px] lg:text-[14px] lg:mt-[0%] mt-[1%]">
              {text}
            </p>
          </div>
        ))}
      </Carousel>

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
      {filteredProducts.length === 0 ? (
        <p className="text-black h-[70vh] flex items-center justify-center lg:text-5xl text-3xl uppercase font-semibold animate-pulse">
          Item <span className="text-[red] italic"> not </span> available
        </p>
      ) : (
        <ProductList products={filteredProducts} />
      )}

      <Footer />
    </>
  );
}
