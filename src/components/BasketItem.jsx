import React from "react";
import { useDispatch } from "react-redux";
import { addToBasket, removeItem } from "./../redux/actions/basketAction";

const BasketItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-between p-4 shadow my-5">
      <div className="flex items-center gap-5">
        <img className="rounded-lg shadow" src={item.image} width={50} />
        <h4>{item.title.slice(0, 20) + "..."}</h4>
        <h4 className="text-green-700">${item.price}</h4>
      </div>
      <div className="flex gap-3 items-center">
        <h6 className="text-nowrap">Miktar:{item.amount}</h6>
        <button
          className="bg-red-700 py-1 px-3 rounded-md"
          onClick={() => dispatch(removeItem(item))}
        >
          -
        </button>
        <button
          className="bg-green-700 py-1 px-3 rounded-md"
          onClick={() => dispatch(addToBasket(item))}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default BasketItem;
