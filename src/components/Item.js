function Item(props) {
  return (
    <div className="product-card">
      <img
        className="item-img"
        src={props.item.img}
        alt={props.item.name}
      ></img>
      <div className="product-name">{props.item.name}</div>
      <div className="order">
        <button className="plus-minus">-</button>
        <div className="qty">{props.item.qty}</div>
        <button className="plus-minus">+</button>
      </div>
      <button className="add-to-cart">Add to Cart</button>
    </div>
  );
}

export default Item;
