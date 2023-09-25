import React from "react";
import { useSelector } from "react-redux";
import Card from "../components/Card";
const MainPage = () => {
  // storea abone olma
  const state = useSelector((store) => store.productReducer);

  // console.log(state);
  return (
    <div className="mt-[90px] p-6">
      {/* yüklenme sürerken */}
      {state.isLoading ? (
        <h1 className="mt-[100px] text-3xl text-center">Yükleniyor...</h1>
      ) : (
        // yüklenme bittiğinde hata yok ise
        !state.isError && (
          <div className="flex flex-wrap justify-center md:justify-between gap-5 p-5">
            {state.products.map((product) => (
              <Card key={product.id} product={product} />
            ))}
          </div>
        )
      )}
      {/* hata olduğunda */}
      {state.isError && (
        <div className="mt-[100px] text-center font-bold text-2xl">
          <h2>Üzgünüz bir hata oluştu</h2>
        </div>
      )}
    </div>
  );
};

export default MainPage;
