import Navbar from "../components/Navbar";
import commerce from "../lib/commerce";
import ProductList from "../components/ProductList";
import Head from "next/head";
import ShopByCart from "../components/ShopByCart";
import Banner1 from "../components/Banner1";
import Banner2 from "../components/Banner2";
import ShopByBrand from "../components/Banner3";
import Footer from "../components/Footer";

export async function getStaticProps() {
  const { data: categories } = await commerce.categories.list();
  const { data: products } = await commerce.products.list();
    console.log(categories);
    console.log(products);

  return {
    props: {
      categories,
      products,
    },
  };

}

export default function IndexPage({ categories, products }) {
  return (
    <div className="brandColor">
      <Head>
        <title> FlairStyle | Home</title>
        <meta name="keywords" content="FlairStyle" />
      </Head>

      <Navbar />
      <ShopByCart categories={categories} />
      <Banner1/>
      <ProductList products={products} />
      <Banner2/>
      <ShopByBrand/>
      <Footer/>
    </div>
  );
}


