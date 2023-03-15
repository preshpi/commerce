import Head from "next/head";
import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { CiDiscount1, CiDeliveryTruck } from "react-icons/ci";
import { RiCustomerService2Fill } from "react-icons/ri";
import { SlDiamond } from "react-icons/sl";

const AboutUs = () => {
  return (
    <>
      <Head>
        <title> FlairStyle | About</title>
        <meta name="keywords" content="FlairStyle" />
      </Head>

      <div className="w-[80%] mx-auto mb-3 p-3 flex items-center gap-2 text-sm mt-5">
        <span className="hover:underline text-gray-500">
          <Link href="/">Home </Link>
        </span>

        <span>
          <MdOutlineKeyboardArrowRight />
        </span>

        <span className="font-[700]">about</span>
      </div>

      <div className="w-[80%] mx-auto mt-[3%]">
        <div className="grid lg:grid-cols-2 items-center justify-center">
          <div className="justify-center flex skew-y-6">
            <p className="lg:text-5xl text-3xl font-bold text-center  bg-teal-100 px-6 py-1.5">
              ABOUT US
            </p>
          </div>
          <p className="text-justify lg:mt-0 mt-6 text-[16px]">
            FlairStyle is a leading e-commerce platform that offers unique and
            trendy fashion items for both men and women. With a focus on
            affordability and accessibility, we use our expertise to provide
            high-quality fashion products that cater to your needs.{" "}
            <span className="italic font-[600]">
              We are available in 10 countries, including Nigeria,
            </span>{" "}
            and strive to make the latest fashion trends accessible to everyone,
            regardless of their location or budget. At FlairStyle, we are
            passionate about empowering our customers to express their
            individuality through fashion, and we are committed to providing a
            seamless online shopping experience.
          </p>
        </div>

        <div className="text-center mt-[15%]">
          <div className="justify-center flex">
            <p className="lg:text-4xl text-3xl font-bold text-center  bg-teal-100 px-6 py-1.5 uppercase">
              what we offer
            </p>
          </div>
          <ul className="grid lg:grid-cols-4 md:grid-cols-2 gap-[30px] place-items-center justify-center mt-[5%]">
            <li className="grid place-items-center justify-center w-32 h-32">
              <CiDeliveryTruck className="text-5xl" />
              <p className="text-xl mt-3">Returns & Delivery</p>
            </li>
            <li className="grid place-items-center justify-center w-32 h-32">
              <RiCustomerService2Fill className="text-5xl" />
              <p className="text-xl mt-3">Customer care</p>
            </li>
            <li className="grid place-items-center justify-center w-32 h-32">
              <SlDiamond className="text-5xl" />
              <p className="text-xl mt-3">affordability & High Quality</p>
            </li>
            <li className="grid place-items-center justify-center w-32 h-32">
              <CiDiscount1 className="text-5xl" />
              <p className="text-xl mt-3">Discount & Free Delivery</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
