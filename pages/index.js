import Navbar from "../components/Navbar";
import commerce from "../lib/commerce";
import ProductList from "../components/ProductList";
import Head from "next/head";
import ShopByCart from "../components/ShopByCart";
import Banner1 from "../components/Banner1";
import Banner2 from "../components/Banner2";
import ShopByBrand from "../components/Banner3";
import Layout from "../layout/index";

export async function getStaticProps() {
  const { data: categories } = await commerce.categories.list();
  const { data: products } = await commerce.products.list();

  return {
    props: {
      categories,
      products,
    },
  };
}

export default function IndexPage({ categories, products,  handleAddToCart }) {
console.log(products);
  return (
    <div className="brandColor">
      <Head>
        <title> FlairStyle | Home</title>
        <meta name="keywords" content="FlairStyle" />
      </Head>
      <Navbar categories={categories} />
      <ShopByCart categories={categories} />
      <Banner1 />
      <ProductList products={products} handleAddToCart={handleAddToCart} />
      <Banner2 />
      <ShopByBrand />
      <Layout />
    </div>
  );
}
