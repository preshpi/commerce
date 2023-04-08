import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { TbTruckDelivery } from "react-icons/tb";
import { AiOutlineSafety } from "react-icons/ai";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import ShareIcons from "../../components/ShareIcons";
import ModalButton from "../../components/Modal";
import commerce from "../../lib/commerce";
import sanitizeHtml from "sanitize-html";
import Layout from "../../layout/index";
import { useState } from "react";
export async function getStaticProps({ params }) {
  const { permalink } = params;

  const product = await commerce.products.retrieve(permalink, {
    type: "permalink",
  });

  return {
    props: {
      product,
    },
  };
}

export async function getStaticPaths() {
  const { data: products } = await commerce.products.list();

  return {
    paths: products.map((product) => ({
      params: {
        permalink: product.permalink,
      },
    })),
    fallback: false,
  };
}

export default function ProductPage({ product }) {
  const sanitizedDescription = sanitizeHtml(product.description, {
    allowedTags: [], // remove all tags
    allowedAttributes: {}, // remove all attributes
  });
  const [selectedSize, setSelectedSize] = useState("");

  const handleClick = (size) => {
    setSelectedSize(size);
  };

  return (
    <>
      <Head>
        <title> FlairStyle | {product.name}</title>
        <meta name="keywords" content="FlairStyle" />
      </Head>

      <div className="w-[80%] mx-auto">
        <div className="pt-6 gap-2 text-sm flex items-center">
          <span className="hover:underline text-gray-500">
            <Link href="/">Home </Link>
          </span>
          <span>
            <MdOutlineKeyboardArrowRight />
          </span>
          <span className="hover:underline text-gray-500">
            <Link href="/products"> Products </Link>
          </span>
          <span>
            <MdOutlineKeyboardArrowRight />
          </span>
          <span className="font-[700]">{product.name}</span>
        </div>

        <div className="lg:flex grid items-center justify-center gap-[30px] mt-6">
          <figure className="mx-auto lg:w-[500px]  lg:h-[600px] w-[300px] h-[300px] md:w-[500px] md:h-[500px] relative">
            <Image
              src={product.image.url}
              alt={product.name}
              title={product.name}
              fill
              sizes="300"
              priority={true}
              className="scale-75 object-cover"
            />
          </figure>

          <div className="pt-5 w-[95%] lg:w-[50%] mx-auto p-3">
            <p className="font-[600]">{product.name}</p>
            <p className="mt-4">{product.price.formatted_with_symbol}</p>

            <div dangerouslySetInnerHTML={{ __html: sanitizedDescription }} />
            {/* colors and add to cart */}
            <p className="font-bold mt-6">Size (US)</p>
            <div className="flex gap-5 mt-2">
              <button
                className={`uppercase lg:px-3 md:px-3 px-2 lg:py-2 md:py-2 py-1 text-sm border-black duration-300 border rounded-full ${
                  selectedSize === "xs"
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }`}
                onClick={() => handleClick("xs")}
              >
                xs(2)
              </button>
              <button
                className={`uppercase lg:px-3 md:px-3 px-2 lg:py-2 md:py-2 py-1 text-sm border-black duration-300 border rounded-full ${
                  selectedSize === "s"
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }`}
                onClick={() => handleClick("s")}
              >
                s(4)
              </button>
              <button
                className={`uppercase lg:px-3 md:px-3 px-2 lg:py-2 md:py-2 py-1 text-sm border-black duration-300 border rounded-full ${
                  selectedSize === "m"
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }`}
                onClick={() => handleClick("m")}
              >
                m(6)
              </button>
              <button
                className={`uppercase lg:px-3 md:px-3 px-2 lg:py-2 md:py-2 py-1 text-sm border-black duration-300 border rounded-full ${
                  selectedSize === "l"
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }`}
                onClick={() => handleClick("l")}
              >
                l(8/10)
              </button>
            </div>

            <div className="grid gap-[30px]">
              <div className="mt-6">
                {/* cart */}
                <div className="mt-6 items-center justify-center">
                  <ModalButton product={product} />
                </div>

                <div>
                  <ShareIcons product={product} />
                </div>
              </div>

              {/* delivery */}
              <div className="mt-6 w-[300px]">
                <p>Delivery</p>
                <div className="flex gap-2">
                  <div className="flex items-center justify-center">
                    <TbTruckDelivery />
                  </div>
                  <p className="font-[600]">Free Shiping</p>
                </div>
                <p className="text-sm text-gray">
                  Note: This will take 30 days
                </p>

                <div className="flex gap-2 mt-3">
                  <div className="flex items-center justify-center">
                    <TbTruckDelivery />
                  </div>
                  <p className="font-[600]">Standard Shiping</p>
                </div>
                <p className="text-sm text-gray">
                  Note: This will take 14 days
                </p>

                <div className="flex gap-2 mt-3">
                  <span>
                    <AiOutlineSafety />
                  </span>
                  <span className="text-sm">
                    You get refunded if item arrives late or not described as
                    seen.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h5 className="font-[600] lg:text-2xl text-xl p-5 mt-6 text-center">
        YOU MAY ALSO LIKE
      </h5>
      <div className="w-[80%] mx-auto mb-[40px] lg:grid-cols-4 grid place-items-center justify-cencter gap-[30px]">
        {product.related_products.map(
          ({ id, image, name, price, permalink }) => (
            <div key={id}>
              <Link
                href={`/products/${permalink}`}
              >
                  <figure className="relative w-[270px] h-[300px] bg-[#a8a8dc] flex items-center justify-center">
                    <Image
                      src={image.url}
                      alt={name}
                      fill
                      sizes="300"
                      priority={true}
                      className="object-cover hover:opacity-75 transition-opacity duration-300"
                    />
                  </figure>
              </Link>
              <p className="text-xl">{name}</p>
              <p className="font-[800]">{price.formatted_with_symbol}</p>
            </div>
          )
        )}
      </div>
      <Layout />
    </>
  );
}
