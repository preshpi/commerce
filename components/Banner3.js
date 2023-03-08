import Image from "next/image";

const ShopByBrand = () => {
    return (
      <div className="mt-[5%]">
        <div className="lg:flex md:flex grid gap-8 md:gap-5 justify-center items-center">
          <div className="lg:w-[400px] lg:h-[600px] md:w-[400px] md:h-[500px] w-[300px] h-[400px] items-center justify-center grid place-items-center relative p-5">
            <Image
              src="https://res.cloudinary.com/dpokiomqq/image/upload/v1677053361/suheyl-burak-p7I07kuPSyU-unsplash_hdqgc3.jpg"
              alt="woman-in-red-dree"
              width={300}
              height={300}
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-10">
              <button className="border-b-4 border-[#222] px-3 py-3 text-center mt-5 font-bold text-xl text-white hover:bg-black hover:italic hover:text-white transistion-all duration-300">
                Shop The Brand
              </button>
            </div>
          </div>
          <div className="lg:w-[400px] lg:h-[600px] md:w-[400px] md:h-[500px] w-[300px] h-[400px] items-center justify-center grid place-items-center relative p-5">
            <Image
              src="https://res.cloudinary.com/dpokiomqq/image/upload/v1677053347/austin-wade-d2s8NQ6WD24-unsplash_kjolg7.jpg"
              alt="man-in-full-fit"
              width={300}
              height={300}
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-10">
              <button className="border-b-4 border-[#222] px-3 py-3 text-center mt-5 font-bold text-xl text-white hover:bg-black hover:italic hover:text-white transistion-all duration-300">
                Shop The Brand
              </button>
            </div>
          </div>
          <div className="lg:w-[400px] lg:h-[600px] md:w-[400px] md:h-[500px] w-[300px] h-[400px] items-center justify-center grid place-items-center relative p-5">
            <Image
              src="https://res.cloudinary.com/dpokiomqq/image/upload/v1677053347/austin-wade-d2s8NQ6WD24-unsplash_kjolg7.jpg"
              alt="man-in-full-fit"
              width={300}
              height={300}
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-10">
              <button className="border-b-4 border-[#222] px-3 py-3 text-center mt-5 font-bold text-xl text-white hover:bg-black hover:italic hover:text-white transistion-all duration-300">
                Shop The Brand
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}
 
export default ShopByBrand;