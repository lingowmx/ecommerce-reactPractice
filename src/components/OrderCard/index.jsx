import { XMarkIcon } from "@heroicons/react/24/solid";

export const OrderCard = (props) => {
  const {id, title, imageURL, price, handleDelete } = props;
  let renderXmarkIcon
  if(handleDelete){
    renderXmarkIcon = <XMarkIcon className="size-6 text-black cursor-pointer"
    onClick={() => handleDelete(id)} />
  }
  return (
    <section className="flex place-content-between items-center mb-2 border-black shadow-md rounded-lg hover:shadow-blue-400 hover:shadow-sm hover:cursor-pointer">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20">
          <img
            className="w-full h-full object-contain rounded-lg"
            src={imageURL}
            alt={title}
          />
        </figure>
        <p className="text-sm font-light w-36">{title}</p>
      </div>
      <div className=" flex items-center gap-2">
        <p className="text-lg font-medium"> ${price}</p>
      {renderXmarkIcon}
      </div>
    </section>
  );
};
