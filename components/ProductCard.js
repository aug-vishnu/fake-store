export const ProductCard = (props) => {
  const { id, title, image, price } = props.product;
  const addToCart = () => {
    console.log("This product added to cart", props.product);
  };

  return (
    <div className="product">
      <div className="productImage">
        <img src={image}></img>
      </div>
      <div className="">
        <h1>{title}</h1>
        <div>{price}</div>{" "}
      </div>
      <div>
        <button onClick={addToCart}>Add to cart</button>
      </div>
    </div>
  );
};
