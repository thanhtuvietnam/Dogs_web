import { useContext, useState } from "react";
import { CartContext } from "../../Contexts/CartContext";
import "./dogs.css";
const DogsCard = (props) => {
  const { id, name, breed, description, price, imageUrl } = props;
  const { addToCart, setTotal } = useContext(CartContext);
  const [isAdded, setAdded] = useState(false);
  const handleclick = () => {
    setAdded(true);
    const newItem = {
      name: name,
      price: price,
      imageUrl: imageUrl,
    };
    addToCart((item) => [...item, newItem]);
    setTotal((total) => (total += Number(price)));
  };
  return (
    <>
      <section className="dogs">
        <div className="dogs-info">
          <p>{name}</p>
          <p>{breed}</p>
        </div>
        <div className="dogs-img-container">
          <img className="dog-img" src={imageUrl} alt="anh" />
        </div>
        <div className="dogs-desc">{description}</div>
        <div className="dogs-price">{price}$</div>
        {isAdded ? (
          <button disabled className="dogs-btn-disabled">
            Đã thêm
          </button>
        ) : (
          <button className="dogs-btn" onClick={handleclick}>
            Thêm vào giỏ hàng
          </button>
        )}
      </section>
    </>
  );
};

export default DogsCard;
