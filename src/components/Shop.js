import Item from "./Item.js";

function Shop(props) {
  return (
    <div className="shopping">
      <div className="product-list">
        {props.products.map((product, index) => (
          <Item
            item={product}
            key={index}
            plus={props.clickPlus}
            minus={props.clickMinus}
            addToCart={props.clickAdd}
          />
        ))}
      </div>
    </div>
  );
}

export default Shop;
