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
    <div className="lg:flex grid md:grid-cols-2 w-[90%] mx-auto justify-center items-center gap-8 mt-[5%] mb-[5%]">
      {data.map(({ button, id, img }) => (
        <div key={id} className="grid justify-center place-items-center">
          <figure className="relative h-[300px] w-[300px] lg:w-[300px] lg:h-[500px]">
            <Image
              src={img}
              alt="gallery-image"
              fill
              sizes="300"
              className="object-cover"
              priority={true}
              blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect x='0' y='0' width='200' height='200' fill='%23CCCCCC'/%3E%3C/svg%3E"
            />
          </figure>
          <button className="border-b-4 w-[200px] border-[#222] px-2 py-3 text-center mt-5 font-bold lg:text-xl text-x text-black hover:bg-black hover:italic hover:text-white transistion-all duration-300">
            <Link href="/products">{button}</Link>
          </button>{" "}
        </div>
      ))}
    </div>
  );
};

export default ShopByBrand;
