import Category from "./Category";
import Image from "next/image";
import Link from "next/link";

const ShopByCart = ({ categories }) => {
  const visibleCategories = categories.slice(0, 4);
  return (
    <div className="mt-[40px] w-[95%] mx-auto">
      <h2 className="text-center text-3xl font-bold mb-[3%]">
        Shop By Categories
      </h2>

      <ul className="grid-cols-2 grid lg:grid-cols-4 w-[80%] mx-auto gap-[20px] mt-[5%]">
        {visibleCategories.map((category) => (
          <li key={category.slug}>
            <Link
              href={`/categories/${category.slug}`}
              className="justify-center items-center flex"
            >
              <div className="w-[250px] border grid text-center items-center justify-around text-black font-bold drop-shadow-sm">
                <div>
                  {category.assets.map((assets) => (
                    <div
                      key={assets.id}
                      className="w-full h-full flex items-center justify-center mt-4"
                    >
                      <Image
                        src={assets.url}
                        alt={category.slug}
                        className="object-cover lg:w-[70px] lg:h-[70px] w-[50px] h-[50px]"
                      />
                    </div>
                  ))}
                </div>
                <div className="mt-3">
                  <Category {...category} />
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      <button className="underline text-black font-bold py-2 px-4 rounded-full my-4 hover:text-gray-700">
        <Link href="/categories">Show All </Link>
      </button>
    </div>
  );
};

export default ShopByCart;
