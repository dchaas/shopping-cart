function Item(props) {
  return (
    <div className="product-card">
      <img
        className="item-img"
        src={props.item.img}
        alt={props.item.name}
      ></img>
      <div className="order">
        <div className="product-name">{props.item.name}</div>
        <div className="product-price">${props.item.price}/lb</div>
        <div className="order-options">
          <button
            className="plus-minus"
            name={props.item.name}
            onClick={props.minus}
          >
            -
          </button>
          <div className="qty">{props.item.qty}</div>
          <button
            className="plus-minus"
            name={props.item.name}
            onClick={props.plus}
          >
            +
          </button>
        </div>
        <button
          className="add-to-cart"
          name={props.item.name}
          onClick={props.addToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Item;
