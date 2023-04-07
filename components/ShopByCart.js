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
                <div className="w-full h-full">
                  {category.assets.map((assets) => (
                    <figure
                      key={assets.id}
                      className="relative flex items-center justify-center mt-4 lg:w-[200px] lg:h-[300px] w-[100px] h-[100px] md:w-[150px] md:h-[150px] "
                    >
                      <Image
                        src={assets.url}
                        alt={category.slug}
                        fill
                        sizes="300"
                        priority={true}
                        blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect x='0' y='0' width='200' height='200' fill='%23CCCCCC'/%3E%3C/svg%3E"
                        className="transition-all duration-300 hover:scale-110 object-cover"
                      />
                    </figure>
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
