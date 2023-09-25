import React from "react";
import { useSelector } from "react-redux";
import BasketItem from "../components/BasketItem";
const BasketPage = () => {
  const state = useSelector((store) => store.basketReducer);
  console.log(state);
  return (
    <div className="mt-[95px] flex flex-row">
      {state.basket.length === 0 && (
        <h3 className="text-center text-2xl">Önce sepete bir ürün ekleyin</h3>
      )}
      {state.basket.length > 0 && (
        <>
          <div className="w-full md:col-span-9">
            {state.basket.map((item) => (
              <BasketItem key={item.id} item={item} />
            ))}
          </div>
          <div className="md:col-span-3">
            <h5>Toplam:{state.total.toFixed(2)}</h5>

            <button
              className="bg-green-700 p-1 rounded-lg mt-3 "
              onClick={() =>
                alert("Ödeme tamamlandı, ücret:" + state.total.toFixed(2))
              }
            >
              Alışverişi Tamamla
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default BasketPage;
