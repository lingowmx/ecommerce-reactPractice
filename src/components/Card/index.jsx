import { useState } from "react";
import PropTypes from "prop-types";
import { useContext } from "react";
import { ShoppingCartContext } from "../../components/Context";
// import { FaPlus } from "react-icons/fa6";
import { PlusIcon } from "@heroicons/react/24/solid";
// import { ShoppingBagIcon } from "@heroicons/react/24/solid";

export const Card = ({
  id,
  image,
  title,
  price,
  description,
  category: { name },
}) => {
  //Create a state for images with error
  // const context = useContext(ShoppingCartContext) se quito para desestructurar
  //Context counter//
  const { count, setCount } = useContext(ShoppingCartContext);
  //
  const {
    openProductDetail,
    setSendProduct,   
    setProductsToBuy,
    productsToBuy,
    openCheckOutMenu,
  } = useContext(ShoppingCartContext);

  //Image error
  const [imageError, setImageError] = useState(false);
  const handleImageError = () => {
    setImageError(true);
  };

  //Show product in product detail
  const showProduct = () => {
    openProductDetail();
    setSendProduct({ id, image, title, price, description, category: { name } });
  };

  const addProductToCart = (event) => {
    event.stopPropagation();
    setCount(count + 1);
    setProductsToBuy((prevProducts) => [
      ...prevProducts,
      {id, image, title, price },
    ]);
    openCheckOutMenu();
    console.log("product:", productsToBuy);
  };
  // console.log("IMAGEURL:", images[0])
  return (
    <section
      className="bg-white cursor-pointer w-56 h-60 rounded-lg items-center"
      onClick={() => showProduct()}
    >
      <figure className="relative mb-4 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg px-2 m-1 text-xs">
          {name}
        </span>
        <img
          className="w-full h-full object-contain rounded-lg"
          src={
            !imageError
              ? image
              : "https://images.pexels.com/photos/207142/pexels-photo-207142.jpeg?auto=compress&cs=tinysrgb&w=800"
          }
          alt={title}
          onError={handleImageError}
        />
        <div
          className="absolute top-0 right-0 justify-center items-center bg-white w-6 h-6 rounded-full m-2"
          onClick={(event) => addProductToCart(event)}
        >
          {/* se cambia el estado, cambiandolo incremendandolo en uno */}
          <PlusIcon className="h-6 w-6 text-black" />
        </div>
      </figure>
      <p className="flex place-content-between items-center">
        <span className="truncate px-1 text-sm font-light">{title}</span>
        <span className="text-lg font-medium">${price}</span>
      </p>
    </section>
  );
};

//PROPTYPES
// Card.propTypes = {
//   image: PropTypes.arrayOf(PropTypes.string).isRequired,
//   title: PropTypes.string.isRequired,
//   price: PropTypes.number.isRequired,
//   description: PropTypes.string.isRequired,
//   id: PropTypes.number.isRequired,
//   category: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//   }).isRequired,
// };
