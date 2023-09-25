import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import BasketPage from "./pages/BasketPage";
import Header from "./components/Header";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "./redux/actions/productActions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // asenkron thunk aksiyonunu çalıştırma
    dispatch(getProducts());
  }, []);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/basket" element={<BasketPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
