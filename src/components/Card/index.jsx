import { useState } from "react";
import PropTypes from "prop-types";
import { useContext } from "react";
import { ShoppingCartContext } from "../../components/Context";
// import { PlusIcon } from "@heroicons/react/24/solid";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";

export const Card = ({ images, title, price, category: { name } }) => {
  //Create a state for images with error
  // const context = useContext(ShoppingCartContext) se quito para desestructurar
  const { count, setCount } = useContext(ShoppingCartContext);
  const { openProductDetail } = useContext(ShoppingCartContext);
  const [imageError, setImageError] = useState(false);
  const handleImageError = () => {
    setImageError(true);
  const showProduct = () =>{
    openProductDetail()
    setSendProduct({images, title, price, category: {name}})
  }
  };
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
          className="w-full h-full object-cover rounded-lg"
          src={
            !imageError
              ? images[0]
              : "https://images.pexels.com/photos/207142/pexels-photo-207142.jpeg?auto=compress&cs=tinysrgb&w=800"
          }
          alt={title}
          onError={handleImageError}
        />
        <div
          className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-4"
          onClick={() => setCount(count + 1)
            
          }

        >
          {/* se cambia el estado, cambiandolo incremendandolo en uno */}
          <ShoppingBagIcon
            className="h-6 w-6 text-black"
            onClick={(e) => {
              e.stopPropagation();
              // setCount(count + 1)
            }}
          />
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
Card.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  category: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};
