import commerce from "../../lib/commerce";
import ProductList from "../../components/ProductList";
import Head from "next/head";
import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Accordion from "../../components/Accordion";
import Countdown from "../../components/Countdown";

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
  return (
    <>
      <Head>
        <title> FlairStyle | categories</title>
        <meta name="keywords" content="FlairStyle" />
      </Head>

      <div className=" text-white text-center bg-[red] p-5">
        <div className="justify-between flex items-center w-[80%] mx-auto">
          <div className="w-[200px] h-20 lg:block hidden">
            <iframe
              src="https://giphy.com/embed/kGFZW7Xa6Hpe9peWjM"
              width="100%"
              height="100%"
              allowFullScreen
            ></iframe>
          </div>

          <div>
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
              frameBorder="0"
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

      <div className="flex w-[95%] mx-auto mt-[7%] h-[700px]">
        <div className="border w-[300px] h-full">
          <Accordion />
        </div>
        <div>
          <ProductList products={products} />
        </div>
      </div>
    </>
  );
}
