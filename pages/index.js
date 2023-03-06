import Navbar from "../components/Navbar";
import commerce from "../lib/commerce";
import ProductList from "../components/ProductList";
import Head from "next/head";
import ShopByCart from "../components/ShopByCart";

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
    <>
      <Head>
        <title> FlairStyle | Home</title>
        <meta name="keywords" content="FlairStyle" />
      </Head>

      <Navbar />
      <ShopByCart categories={categories} />
      <ProductList products={products} />
    </>
  );
}


