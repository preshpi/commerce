import Link from "next/link";
import Image from "next/image";
import Category from "./category";

export default function CategoryList({ categories }) {
  if (!categories) return null;
  return (
    <div className="mt-[40px] w-[95%] mx-auto">
      <h2 className="text-center text-3xl font-bold mb-[3%]">
        Shop By Categories
      </h2>

      <ul className="grid-cols-2 grid lg:grid-cols-5 md:grid-cols-4 gap-[50px] items-center justify-center">
        {categories.map((category) => (
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
                      <img
                        src={assets.url}
                        alt={category.slug}
                        className="object-cover w-[70px] h-[70px]"
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
    </div>
  );
}
