import React from "react";
import Head from "next/head";
import { useState, useEffect } from "react";
import commerce from "../lib/commerce";
import Link from "next/link";
import { HiArrowNarrowLeft } from "react-icons/hi";
import Image from "next/image";
import { ImBin } from "react-icons/im";
import { Carousel } from "antd";
import { TbTruckDelivery } from "react-icons/tb";
import Footer from "../components/Footer";

export default function Cart() {
  const carouselData = [
    {
      id: 1,
      text: "Thanks for shopping with us!!!",
    },
    {
      id: 2,
      text: "Only cute people shop from us",
    },
    {
      id: 3,
      text: "We hope to see you again.",
    },
    {
      id: 3,
      text: "Bye besties, shop more if you don't mind 🥺",
    },
  ];
  const [cart, setCart] = useState(null);

  const fetchCart = () => {
    commerce.cart
      .retrieve()
      .then((cart) => {
        console.log(cart);
        setCart(cart);
      })
      .catch((error) => {
        console.log("There was an error fetching the cart", error);
      });
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const handleUpdateCartQty = (lineItemId, newQuantity) => {
    commerce.cart
      .update(lineItemId, { quantity: newQuantity })
      .then((response) => {
        setCart(response.cart);
      })
      .catch((error) => {
        console.log("There was an error updating the cart", error);
      });
  };

  const handleRemoveFromCart = (lineItemId) => {
    commerce.cart
      .remove(lineItemId)
      .then((response) => {
        setCart(response.cart);
      })
      .catch((error) => {
        console.log(
          "There was an error removing the item from the cart",
          error
        );
      });
  };

  const clearCart = () => {
    commerce.cart
      .empty()
      .then(() => {
        setCart(null);
      })
      .catch((error) => {
        console.log("There was an error clearing the cart", error);
      });
  };

  return (
    <>
      <Head>
        <title> FlairStyle | Cart</title>
        <meta name="keywords" content="FlairStyle" />
      </Head>
      <Carousel autoplay dots={false}>
        {carouselData.map(({ text, id }) => (
          <div
            key={id}
            className="bg-gradient-to-r from-[#fed6e3] to-[#a8edea] lg:h-14 h-16"
          >
            <p className="flex items-center justify-center font-mono text-center p-3 text-[12px] lg:text-[14px] lg:mt-[0%] mt-[1%]">
              {text}
            </p>
          </div>
        ))}
      </Carousel>
      <div className="bg-gray-50">
        <div className="pt-6 gap-2 text-sm flex items-center w-[95%] mx-auto">
          <HiArrowNarrowLeft />
          <span className="hover:underline text-gray-500">
            <Link href="/">Home </Link>
          </span>
        </div>
        <div className="lg:flex md:flex grid w-[80%] mx-auto items-center justify-center">
          <div className="lg:w-[500px] w-[300px]">
            <h4 className="text-3xl text-center mt-[8%]">Your Shopping Cart</h4>
            {cart?.line_items.map((item) => (
              <div key={item.id} className="mt-[8%] grid grid-cols-2">
                <div>
                  <h3 className="font-[600 mb-3">{item.name}</h3>
                  <Image
                    src={item.image.url}
                    alt={item.name}
                    title={item.name}
                    width={80}
                    height={80}
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col place-items-center justify-center">
                  <p>{item.price.formatted_with_symbol}</p>
                  <div className="flex justify-center items-center gap-2 mt-4">
                    <button
                      className="bg-gray-100 rounded-full px-2"
                      onClick={() =>
                        handleUpdateCartQty(item.id, item.quantity - 1)
                      }
                      disabled={item.quantity === 1}
                    >
                      -
                    </button>
                    <p>{item.quantity}</p>
                    <button
                      className="bg-gray-100 rounded-full px-2"
                      onClick={() =>
                        handleUpdateCartQty(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="mt-5 px-2 py-1 rounded-full"
                    onClick={() => handleRemoveFromCart(item.id)}
                  >
                    <ImBin />
                  </button>
                </div>
              </div>
            ))}
            <div className="flex items-center justify-center">
              <button
                onClick={clearCart}
                className="text-x bg-[#222] text-white hover:opacity-75 px-2 py-2 flex items-center gap-2 rounded mt-5"
              >
                <ImBin />
                Clear cart
              </button>
            </div>
          </div>
          <div className="lg:w-[500px] bg-gray-50 lg:h-[350px] h-[310px] w-[300px] lg:mt-[5%] mt-[11%] shadow-md p-5 mb-[8%]">
            <div className="flex justify-between items-center mt-[10%]">
              <p className="text-2xl font-bold">Total</p>
              <p>{cart?.subtotal.formatted_with_symbol}</p>
            </div>

            <div className="flex justify-between items-center mt-[5%]">
              <p>Delivery</p>
              <div className="flex gap-2">
                <div className="flex items-center justify-center">
                  <TbTruckDelivery />
                </div>
                <p className="font-[600]">Free Shiping</p>
              </div>
            </div>

            <hr className="border-black border-1 lg:mt-[2%] mt-[10%]"/>
            <div className="mt-[5%] flex items-center justify-center">
              <button className="lg:px-[50px] px-[30px] py-3 bg-black hover:opacity-75 text-white">
               <Link href="/checkout">Checkout</Link> 
              </button>
            </div>

            <div className="lg:mt-[3%] mt-[10%]">
              <p className="font-bold text-2x">We Accept</p>
              <ul className="flex space-x-6 items-start justify-start mt-3">
                <li className="w-[50px] cursor-pointer lg:hover:scale-75 hover:opacity-75 transition-all duration-300">
                  <Image
                    src="https://img.ltwebstatic.com/images2_pi/2018/06/06/15282732803587566708.png"
                    alt="mastercard"
                    width={300}
                    height={300}
                    loading="lazy"
                  />
                </li>
                <li className="w-[50px] cursor-pointer lg:hover:scale-75 hover:opacity-75 transition-all duration-300">
                  <Image
                    src="https://img.ltwebstatic.com/images2_pi/2018/06/06/15282733431754785346.png"
                    alt="paypal"
                    width={300}
                    height={300}
                    loading="lazy"
                  />
                </li>
                <li className="w-[50px] cursor-pointer lg:hover:scale-75 hover:opacity-75 transition-all duration-300">
                  <Image
                    src="https://img.ltwebstatic.com/images3_pi/2021/03/09/161528368123dd7a35ad8708b0dfc74b3630526891.png"
                    alt="visa"
                    width={300}
                    height={300}
                    loading="lazy"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
}
