import Image from "next/image";
import Link from "next/link";

const data = [
  {
    id: 1,
    img: "https://res.cloudinary.com/dpokiomqq/image/upload/v1677053361/suheyl-burak-p7I07kuPSyU-unsplash_hdqgc3.jpg",
    button: "Shop The Brand",
  },
  {
    id: 2,
    img: "https://res.cloudinary.com/dpokiomqq/image/upload/v1677053347/austin-wade-d2s8NQ6WD24-unsplash_kjolg7.jpg",
    button: "Shop By Trends",
  },
  {
    id: 3,
    img: "https://res.cloudinary.com/dpokiomqq/image/upload/v1678907188/prince-akachi-7j9jNQxXUCU-unsplash_pdhtzj.jpg",
    button: "Shop By Fit",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1554412933-514a83d2f3c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d29tZW4lMjBmYXNoaW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    button: "Shop By Occassions",
  },
];

const ShopByBrand = () => {
  return (
    <div className="mt-5 items-center justify-center flex">
      <div className="items-center justify-center lg:flex grid grid-cols-2">
        {data.map(({ button, id, img }) => (
          <div
            key={id}
            className="gap-8 md:gap-5 mx-auto items-center justify-center grid place-items-center relative p-5"
          >
            <Image
              src={img}
              alt="gallery-image"
              width={300}
              height={300}
              loading="lazy"
              className="object-cover"
            />
              <button className="border-b-4 border-[#222] px-3 py-3 text-center mt-5 font-bold text-xl text-black hover:bg-black hover:italic hover:text-white transistion-all duration-300">
                <Link href="/products">
                    {button}
                </Link>
             </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopByBrand;
