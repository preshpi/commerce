import commerce from "../../lib/commerce";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { TbTruckDelivery } from "react-icons/tb";
import { AiOutlineSafety } from "react-icons/ai";
import FavouriteButton from "../../components/FavouriteButton";
import Footer from "../../components/Footer";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import ShareIcons from "../../components/ShareIcons";

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
  const zommImage = product.image.url;
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
          <div className="mx-auto">
            <Image
              src={product.image.url}
              alt={product.name}
              title={product.name}
              width={300}
              height={300}
              loading="lazy"
              className="lg:w-[500px] lg:h-[600px] w-[300px] h-[300px] md:w-[500px] md:h-[500px] object-cover"
            />


          </div>
          <div className="pt-5 w-[95%] lg:w-[50%] mx-auto p-3">
            <p className="font-[600]">{product.name}</p>
            <p className="mt-4">{product.price.formatted_with_symbol}</p>

            <ul className="list-disc px-3 mt-5">
              <li>Lorem ipsum dolor sit</li>
              <li>Phasellus finibus</li>
              <li>Curabitur tincidunt</li>
            </ul>

            {/* colors and add to cart */}
            <p className="font-bold mt-6">Size (US)</p>
            <div className="flex gap-5 mt-2">
              <button className="uppercase text-black lg:px-3 md:px-3 px-2 py-1 lg:py-2 md:py-2 text-sm border-black hover:bg-black hover:text-white transistion-colors duration-300 border rounded-full">
                xs(2)
              </button>
              <button className="uppercase text-black lg:px-3 md:px-3 px-2 py-1 lg:py-2 md:py-2 text-sm border-black hover:bg-black hover:text-white transistion-colors duration-300 border rounded-full">
                s(4)
              </button>
              <button className="uppercase text-black lg:px-3 md:px-3 px-2 py-1 lg:py-2 md:py-2 text-sm border-black hover:bg-black hover:text-white transistion-colors duration-300 border rounded-full">
                m(6)
              </button>
              <button className="uppercase text-black lg:px-3 md:px-3 px-2 py-1 lg:py-2 md:py-2 text-sm border-black hover:bg-black hover:text-white transistion-colors duration-300 border rounded-full">
                l(8/10)
              </button>
            </div>

            <div className="lg:flex md:flex grid gap-[30px]">
              <div className="mt-6">
                {/* colors */}
                <p className="font-bold">Colors</p>
                <div className="flex gap-5 mt-2">
                  <button
                    className="w-8 h-8 bg-[pink] hover:scale-75 transistion-all duration-300 rounded-full"
                    title="pink"
                  ></button>
                  <button
                    className="w-8 h-8 bg-[black] hover:scale-75 transistion-all duration-300 rounded-full"
                    title="black"
                  ></button>
                  <button
                    className="w-8 h-8 bg-[grey] hover:scale-75 transistion-all duration-300 rounded-full"
                    title="grey"
                  ></button>
                  <button
                    className="w-8 h-8 bg-[blue] hover:scale-75 transistion-all duration-300 rounded-full"
                    title="blue"
                  ></button>
                </div>

                {/* cart */}
                <div className="grid grid-cols-2 space-x-6 mt-6 items-center justify-center gap-3">
                  <button className="md:w-[200px] lg:w-[150px] w-[150px] py-3  bg-black text-white font-bold uppercase hover:opacity-70 transition-all duration-300">
                    <Link href="/cart">ADD TO CART</Link>
                  </button>
                  <div>
                    <button className="rounded-[50px] border border-gray px-3 py-3 cursor-pointer">
                      <FavouriteButton className="text-5xl" />
                    </button>
                  </div>
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
      <div className="lg:grid-cols-4 grid gap-[20px] w-[80%] mx-auto">
        {product.related_products.map(
          ({ id, image, name, price, permalink }) => (
            <div key={id}>
              <Link href={`/products/${permalink}`}>
                <Image
                  src={image.url}
                  alt={name}
                  width={300}
                  height={300}
                  className="lg:w-[300px] lg:h-[300px] object-cover hover:opacity-75 transition-opacity duration-300"
                />
              </Link>
              <p className="text-xl">{name}</p>
              <p className="font-[800]">{price.formatted_with_symbol}</p>
            </div>
          )
        )}
      </div>
      <Footer />
    </>
  );
}
