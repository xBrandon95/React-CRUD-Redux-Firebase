import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_EXITO,
  AGREGAR_PRODUCTO_ERROR,
  OBTENER_PRODUCTOS,
  OBTENER_PRODUCTOS_EXITO,
  OBTENER_PRODUCTOS_ERROR,
  ELIMINAR_PRODUCTO,
  ELIMINAR_PRODUCTO_EXITO,
  ELIMINAR_PRODUCTO_ERROR,
  OBTENER_PRODUCTO_EDITAR,
  EDITAR_PRODUCTO_EXITO,
  EDITAR_PRODUCTO_ERROR,
} from "../types";

const initialState = {
  productos: [],
  loading: false,
  error: null,
  productoeditar: null,
  productoeliminarid: null,
};

export const productoReducer = (state = initialState, action) => {
  switch (action.type) {
    case AGREGAR_PRODUCTO:
    case OBTENER_PRODUCTOS:
      return {
        ...state,
        loading: action.payload,
        error: null,
      };

    case AGREGAR_PRODUCTO_EXITO:
      return {
        ...state,
        loading: false,
        productos: [...state.productos, action.payload],
      };

    case AGREGAR_PRODUCTO_ERROR:
    case OBTENER_PRODUCTOS_ERROR:
    case ELIMINAR_PRODUCTO_ERROR:
    case EDITAR_PRODUCTO_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case OBTENER_PRODUCTOS_EXITO:
      return {
        ...state,
        loading: false,
        productos: action.payload,
      };

    case ELIMINAR_PRODUCTO:
      return {
        ...state,
        productoeliminarid: action.payload,
      };

    case ELIMINAR_PRODUCTO_EXITO:
      return {
        ...state,
        productos: state.productos.filter(
          (producto) => producto.id !== state.productoeliminarid
        ),
        productoeliminarid: null,
      };

    case OBTENER_PRODUCTO_EDITAR:
      return {
        ...state,
        productoeditar: action.payload,
      };

    case EDITAR_PRODUCTO_EXITO:
      return {
        ...state,
        productos: state.productos.map((producto) =>
          producto.id === action.payload.id ? action.payload : producto
        ),
        productoeditar: null,
      };

    default:
      return state;
  }
};
