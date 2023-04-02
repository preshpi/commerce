import { useState } from "react";
import router from "next/router";
import commerce from "../lib/commerce";

const ModalButton = ({ product }) => {
  const [showModal, setShowModal] = useState(false);
  const handleAddToCart = () => {
    setShowModal(true);
  };

  const handleContinueShopping = () => {
    setShowModal(false);
  };

  const handleGoToCart = () => {
    commerce.cart
      .add(product.id, 1)
      .then((item) => {
        router.push("/cart");

        console.log(`Added ${product.name} to cart:`, item);
      })
      .catch((error) => {
        console.log(
          `There was an error adding ${product.name} to the cart:`,
          error
        );
      });
  };
  return (
    <div>
      <button
        onClick={handleAddToCart}
        className="md:w-[200px] lg:w-[150px] w-[150px] py-3  bg-black text-white font-bold uppercase hover:opacity-70 transition-all duration-300"
      >
        Add to Cart
      </button>
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full flex bg-black opacity-75  justify-center items-center">
          <div className="shadow-md rounded-lg p-8 bg-white opacity-100">
            <h2 className="mb-4 text-black">
              Do you want to continue shopping?
            </h2>
            <div className="flex justify-end">
              <button
                className="mr-2 px-4 py-2 bg-gray-200 text-gray-800 rounded"
                onClick={handleContinueShopping}
              >
                Yes
              </button>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded"
                onClick={handleGoToCart}
              >
                No, go to cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalButton;
