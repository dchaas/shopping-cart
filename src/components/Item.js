function Item(props) {
  return (
    <div className="product-card">
      <div className="product-name">{props.name}</div>
      <button>-</button>
      <div className="qty">{props.qty}</div>
      <button>+</button>
      <button>Add to Cart</button>
    </div>
  );
}

export default Item;
