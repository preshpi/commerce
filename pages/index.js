import Navbar from "../components/Navbar";
import commerce from "../lib/commerce";
import ProductList from "../components/ProductList";

export async function getStaticProps() {
  const merchant = await commerce.merchants.about();
  const { data: categories } = await commerce.categories.list();
  const { data: products } = await commerce.products.list();
    console.log(categories);
    console.log(products);

  return {
    props: {
      merchant,
      categories,
      products,
    },
  };

}

export default function IndexPage({ merchant, categories, products }) {
  return (
    <>
     <Navbar/>
     <ProductList products={products} />
    </>
  );
}


