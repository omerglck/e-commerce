const initialState = {
  basket: [],
  total: 0,
};
export const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      // sepette bu elemandan var mı
      const index = state.basket.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index >= 0) {
        // spette bu üründen var ise
        const clone = [...state.basket];
        const item = clone[index];
        // ürünün miktarını bir arttır
        // clone[index].amount++;
        clone[index] = {
          ...item,
          amount: item.amount + 1,
        };
        // storeu güncelle
        return { basket: clone, total: state.total + action.payload.price };
      } else {
        // diziye yeni ürünü ekle
        const newBasket = state.basket.concat({ ...action.payload, amount: 1 });
        // store'u güncelle
        return {
          basket: newBasket,
          total: state.total + action.payload.price,
        };
      }
    case "REMOVE_ITEM":
      const found = state.basket.findIndex(
        (item) => item.id === action.payload.id
      );
      // eleman sepetten varsa ve miktarı 1'den fazla ise
      if (found >= 0 && action.payload.amount > 1) {
        // miktarı 1 azalt
        const clone = [...state.basket];
        const item = clone[found];
        // yeni fiyatı hesaplma
        const priceFor1 = item.price / item.amount;

        clone[found] = {
          ...item,
          amount: item.amount - 1,
        };
        return { basket: clone, total: state.total - item.price };
      } else {
        // sepetten kaldır
        const newBasket = state.basket.filter(
          (i) => i.id !== action.payload.id
        );
        return {
          basket: newBasket,
          total: state.total - action.payload.price,
        };
      }
    default:
      return state;
  }
};
