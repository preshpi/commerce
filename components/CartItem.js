import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
  const handleUpdateCartQty = (lineItemId, quantity) => {
    onUpdateCartQty(lineItemId, quantity);
  };

  const handleRemoveFromCart = () => {
    onRemoveFromCart(item.id);
  };

  return (
    <div>
      <Image
        src={item.image.url}
        alt={item.name}
        width={300}
        height={300}
        loading="lazy"
      />
      <div>
        <h4>{item.name}</h4>
        <div>
          <button
            type="button"
            onClick={() =>
              item.quantity > 1
                ? handleUpdateCartQty(item.id, item.quantity - 1)
                : handleRemoveFromCart()
            }
          >
            -
          </button>
          <p>{item.quantity}</p>
          <button
            type="button"
            onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}
          >
            +
          </button>
        </div>
        <div className="cart-item__details-price">
          {item.line_total.formatted_with_symbol}
        </div>
      </div>
      <button type="button" onClick={handleRemoveFromCart}>
        Remove
      </button>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.object,
};

export default CartItem;
