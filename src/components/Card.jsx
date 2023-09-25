import React from "react";
import { useDispatch } from "react-redux";
import { addToBasket } from "./../redux/actions/basketAction";

const Card = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div className="w-[18rem] bg-gray-500 p-2 rounded-lg">
      <div className="p-5 flex justify-center">
        <img
          src={product.image}
          className="img-fluid object-fit-contain rounded-lg"
          style={{ width: "200px", height: "250px" }}
        />
      </div>
      <div className=" p-3">
        <h5 className="font-bold text-gray-200">{product.title}</h5>
        <h4 className="font-bold text-gray-200">${product.price}</h4>
        <p className="text-gray-300">
          {product.description.slice(0, 50) + "..."}
        </p>
        <button
          onClick={() => dispatch(addToBasket(product))}
          className="bg-gray-700 p-2 rounded-lg mt-2 w-full transition hover:scale-[0.95] hover:bg-gray-900"
        >
          Sepete Ekle
        </button>
      </div>
    </div>
  );
};

export default Card;
