import Category from "./Category";
import Image from "next/image";
import Link from "next/link";

const ShopByCart = ({ categories }) => {
  const visibleCategories = categories.slice(0, 4);
  return (
    <div className="w-[95%] mx-auto">
      <h2 className="text-center text-3xl font-[600] mt-6">
        Shop By Categories
      </h2>

      <ul className="grid-cols-2 grid lg:grid-cols-4 w-[80%] mx-auto gap-[20px] mt-[5%] mb-[3%] relative">
        {visibleCategories.map((category) => (
          <li key={category.slug}>
            <Link
              href={`/categories/${category.slug}`}
              className="justify-center items-center flex"
            >
              <div className="w-[250px] lg:h-[300px] grid text-center items-center justify-around text-black font-bold drop-shadow-sm">
                <div>
                  {category.assets.map((assets) => (
                    <div
                      key={assets.id}
                      className="w-full h-full flex items-center justify-center mt-4"
                    >
                      <Image
                        src={assets.url}
                        alt={category.slug}
                        width={300}
                        height={300}
                        className="object-cover lg:w-[200px] lg:h-[300px] w-[100px] h-[100px] md:w-[150px] md:h-[150px] transition-all duration-300 hover:scale-110"
                      />
                    </div>
                  ))}
                </div>
                <div className="mt-3 uppercase">
                  <Category {...category} />
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-center pt-6">
      <button className="bg-[#222] text-white text-center font-bold py-2 px-4 rounded-full my-4 hover:opacity-75 animate-pulse">
        <Link href="/categories">Show All </Link>
      </button>        
      </div>

    </div>
  );
};

export default ShopByCart;
