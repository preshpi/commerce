import router from "next/router";
import commerce from "../lib/commerce";
import toast, { Toaster } from "react-hot-toast";

const ModalButton = ({ product }) => {
  const handleAddToCart = () => {
    toast((t) => (
      <div>
        <h2 className="mb-4 text-black">Do you want to continue shopping?</h2>
        <div className="flex justify-end">
          <button
            className="mr-2 px-4 py-2 bg-gray-300 text-gray-800 rounded"
            onClick={() => toast.dismiss(t.id)}
          >
            Yes
          </button>
          <button
            className="px-4 py-2 bg-[red] text-white rounded outline-none"
            onClick={handleGoToCart}
          >
            No, go to cart
          </button>
        </div>
      </div>
    ));
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
      <Toaster />
    </div>
  );
};

export default ModalButton;
