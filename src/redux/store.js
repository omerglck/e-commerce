import { combineReducers, createStore, applyMiddleware } from "redux";
import { productReducer } from "./reducers/productReducer";
import { basketReducer } from "./reducers/basketReducer";
import thunk from "redux-thunk";
// reducer'ları birleştirme
const rootReducer = combineReducers({
  basketReducer,
  productReducer,
});
// store'u oluşturma ve export etme
export default createStore(rootReducer, applyMiddleware(thunk));
