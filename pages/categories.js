import commerce from "../lib/commerce";
import CategoryList from "../components/CategoryList";
import ProductsInCategories from "../components/ProductsIncategories";
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

export default function CategoriesPage({ categories, products, onAddToCart }) {
  console.log(categories);
  return (
    <>
      <CategoryList categories={categories} />
      <ProductsInCategories products={products} onAddToCart={onAddToCart} />
      <Layout />
    </>
  );
}


