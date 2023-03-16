import commerce from "../lib/commerce";
import ProductList from "../components/ProductList";
import Footer from "../components/Footer";
import Head from "next/head";
import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export async function getStaticProps() {
  const { data: products } = await commerce.products.list();

  return {
    props: {
      products,
    },
  };
}

export default function ProductsPage({ products }) {
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

      <ProductList products={products} />
      <Footer />
    </>
  );
}