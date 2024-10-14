// import module.css here;
const Product = ({name,price,quantity,id,handleQty,disable}) => {
  return (
    <>
      <div data-testid="product-container" key={id}>
        <h2 data-testid="product-name">{name}</h2>
        <h2 data-testid="product-price">{price}</h2>
        <button data-testid="quantity-increment" onClick={()=>handleQty(id,1)}>+</button>
        <h2 data-testid="product-quantity">{quantity}</h2>
        <button data-testid="quantity-decrement" onClick={()=>handleQty(id,-1)} disabled={disable}>-</button>
      </div>
    </>
  );
};
export default Product;
