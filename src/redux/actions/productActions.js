import axios from "axios";

// asenkron aksiyon (thunk)
export const getProducts = () => (dispatch) => {
  axios
    .get("https://fakestoreapi.com/products")
    .then((res) =>
      // api'dan gelen verileri reducer'a aktarma
      dispatch({
        type: "SET_PRODUCTS",
        payload: res.data,
      })
    )
    .catch((err) =>
      // hata oluşursa reducer'a hatayı gönderme
      dispatch({
        type: "SET_ERROR",
        payload: err,
      })
    );
};
