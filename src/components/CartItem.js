function CartItem(props) {
  return (
    <div className="cart-item">
      <div className="cart-item-name">{props.item.name}</div>
      <div className="cart-item-price">${props.item.price}/lb</div>
      <div className="cart-item-qty">{props.item.qty} lbs</div>
      <button
        className="remove-button"
        name={props.item.name}
        onClick={props.removeItem}
      >
        Remove from Cart
      </button>
    </div>
  );
}

export default CartItem;
