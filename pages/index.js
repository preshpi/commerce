import Navbar from "../components/Navbar";
import commerce from "../lib/commerce";
import ProductList from "../components/ProductList";
import Head from "next/head";
import ShopByCart from "../components/ShopByCart";
import Banner1 from "../components/Banner1";
import Banner2 from "../components/Banner2";
import ShopByBrand from "../components/Banner3";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";

export async function getStaticProps() {
  const { data: categories } = await commerce.categories.list();
  const { data: products } = await commerce.products.list();

  return {
    props: {
      categories,
      products,
    },
  };
}

export default function IndexPage({ categories, products }) {
  const [cart, setCart] = useState({});
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

  const handleAddToCart = (productId, quantity) => {
    commerce.cart
      .add(productId, quantity)
      .then((item) => {
        setCart(item.cart);
      })
      .catch((error) => {
        console.error("There was an error adding the item to the cart", error);
      });
  };

  const handleUpdateCartQty = (lineItemId, quantity) => {
    commerce.cart
      .update(lineItemId, { quantity })
      .then((resp) => {
        setCart(resp.cart);
      })
      .catch((error) => {
        console.log("There was an error updating the cart items", error);
      });
  };

  const handleEmptyCart = () => {
  commerce.cart
    .empty()
    .then((resp) => {
      setCart(resp.cart);
    })
    .catch((error) => {
      console.error("There was an error emptying the cart", error);
    });
  };

  const handleRemoveFromCart = (lineItemId) => {
   commerce.cart
     .remove(lineItemId)
     .then((resp) => {
       setCart(resp.cart);
     })
     .catch((error) => {
       console.error(
         "There was an error removing the item from the cart",
         error
       );
     });
  };


  return (
    <div className="brandColor">
      <Head>
        <title> FlairStyle | Home</title>
        <meta name="keywords" content="FlairStyle" />
      </Head>

      <Navbar
        cart={cart}
        onUpdateCartQty={handleUpdateCartQty}
        onEmptyCart={handleEmptyCart}
        onRemoveFromCart={handleRemoveFromCart}
        categories={categories}
      />
      <ShopByCart categories={categories} />
      <Banner1 />
      <ProductList products={products} onAddToCart={handleAddToCart} />
      <Banner2 />
      <ShopByBrand />
      <Footer />
    </div>
  );
}
