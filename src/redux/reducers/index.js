import { combineReducers } from "redux";
import { alertaReducer } from "./alertaReducer";
import { productoReducer } from "./productosReducer";

export default combineReducers({
  productos: productoReducer,
  alerta: alertaReducer,
});
