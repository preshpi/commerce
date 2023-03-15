import React from "react";
import Head from "next/head";
import CartItem from "../components/CartItem";

export default function Cart({ cart, onEmptyCart }) {
  console.log(cart);
  const handleEmptyCart = () => {
    onEmptyCart();
  };

  const renderEmptyMessage = () => {
    if (cart?.total_items > 0) {
      return;
    }
    return <p>You have no items in your shopping cart, start adding some!</p>;
  };

  const renderItems = () =>
    cart?.line_items.map((lineItem) => {
      return <CartItem item={lineItem} key={lineItem.id} />;
    });

  const renderTotal = () => (
    <div>
      <span>Subtotal:</span>
      <p>{cart?.subtotal.formatted_with_symbol}</p>
    </div>
  );

  return (
    <>
      <Head>
        <title> FlairStyle | Cart</title>
        <meta name="keywords" content="FlairStyle" />
      </Head>
      <div>
        <h4>Your Shopping Cart</h4>
        {renderEmptyMessage()}
        {renderItems()}
        {renderTotal()}

        <button onClick={handleEmptyCart}>Empty cart</button>
      </div>
    </>
  );
}

// import PropTypes from "prop-types";

// export default function Cart  ({ cart }) {

//   const handleEmptyCart = () => {
//     onEmptyCart();
//   };

//   const renderEmptyMessage = () => {
//     if (cart.total_unique_items > 0) {
//       return;
//     }

//     return (
//       <p className="cart__none">
//         You have no items in your shopping cart, start adding some!
//       </p>
//     );
//   };

//   const renderItems = () =>
//     cart.line_items.map((lineItem) => (
//       <CartItem item={lineItem} key={lineItem.id} className="cart__inner" />
//     ));

//   const renderTotal = () => (
//     <div className="cart__total">
//       <p className="cart__total-title">Subtotal:</p>
//       <p className="cart__total-price">{cart.subtotal.formatted_with_symbol}</p>
//     </div>
//   );

//   return (
//     <div className="cart">
//       <h4 className="cart__heading">Your Shopping Cart</h4>
//       {renderEmptyMessage()}
//       {renderItems()}
//       {renderTotal()}
//       <div className="cart__footer">
//         <button className="cart__btn-empty">Empty cart</button>
//         <button className="cart__btn-checkout">Checkout</button>
//       </div>
//     </div>
//   );
// };

// Cart.propTypes = {
//   cart: PropTypes.object,
//   onEmptyCart: () => {},
// };

// function  CartItem  ({ item })  {

//   const handleUpdateCartQty = (lineItemId, quantity) => {
//     onUpdateCartQty(lineItemId, quantity);
//   };

//   const handleRemoveFromCart = () => {
//     onRemoveFromCart(item.id);
//   };

//   return (
//     <div className="cart-item">
//       {/* <img className="cart-item__image" src={item.image.url} alt={item.name} /> */}
//       <div className="cart-item__details">
//         <h4 className="cart-item__details-name">{item.name}</h4>
//         <div className="cart-item__details-qty">
//           <button
//             type="button"
//             onClick={() =>
//               item.quantity > 1
//                 ? handleUpdateCartQty(item.id, item.quantity - 1)
//                 : handleRemoveFromCart()
//             }
//           >
//             -
//           </button>
//           <p>{item.quantity}</p>
//           <button
//             type="button"
//             onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}
//           >
//             +
//           </button>
//         </div>
//         <div className="cart-item__details-price">
//           {item.line_total.formatted_with_symbol}
//         </div>
//       </div>
//       <button
//         type="button"
//         className="cart-item__remove"
//         onClick={handleRemoveFromCart}
//       >
//         Remove
//       </button>
//     </div>
//   );
// };

// CartItem.propTypes = {
//   item: PropTypes.object,
// };
