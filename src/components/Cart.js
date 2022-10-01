import CartItem from "./CartItem.js";

function Cart(props) {
  function calculateTotal() {
    let total = 0;
    props.cart.forEach((item) => {
      total += item.price * item.qty;
    });
    return total;
  }

  return (
    <div className="cart-holder">
      <div className="cart-details">Your Order</div>
      {props.cart.map((product, index) => (
        <CartItem
          key={index}
          item={product}
          name={product.name}
          removeItem={props.removeItem}
        />
      ))}
      <hr></hr>
      <div className="total">
        <div className="total-text">Total:</div>
        <div className="total-price">${calculateTotal()}</div>
      </div>
    </div>
  );
}

export default Cart;
