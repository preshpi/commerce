import Link from "next/link";
import Category from "./Category";
import Head from "next/head";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function CategoryList({ categories }) {
  return (
    <>
      <Head>
        <title> FlairStyle | categories</title>
        <meta name="keywords" content="FlairStyle" />
      </Head>

      <div className="w-[80%] mx-auto mb-3 flex items-center gap-2 text-sm mt-5">
        <span className="hover:underline text-gray-500">
          <Link href="/">Home </Link>
        </span>

        <span>
          <MdOutlineKeyboardArrowRight />
        </span>

        <span className="text-black font-bold">
          <span>categories</span>
        </span>
      </div>

      <div className="mt-[40px] w-[95%] mx-auto">
        <ul className="md:flex md:flex-wrap lg:flex lg:flex-wrap grid grid-cols-2 lg:gap-[30px] gap-[10px] items-center justify-center">
          {categories.map((category) => (
            <li key={category.slug}>
              <Link
                href={`/categories/${category.slug}`}
                className="justify-center items-center flex"
              >
                <div className="bg-gray-300 rounded-lg w-[190px] h-12 shadow-md flex items-center justify-center  hover:scale-90 hover:shadow-inner hover:bg-teal-50  skew-y-6 delay-100  hover:translate-x-4 transistion-all duration-300">
                  <Category {...category} />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
