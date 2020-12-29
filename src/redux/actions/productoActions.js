import { db } from "../../config/firebase";
import Swal from "sweetalert2";
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
  EDITAR_PRODUCTO,
  EDITAR_PRODUCTO_EXITO,
  EDITAR_PRODUCTO_ERROR,
} from "../types";

// **********  Agregar producto a la base de datos **********
export const agregarProductoAction = (producto) => {
  return async (dispatch) => {
    dispatch(agregarProducto());

    try {
      // Insertamos en la base de datos
      const data = await db.collection("productos").add(producto);
      producto.id = data.id;
      // Actualizamos el state
      dispatch(agregarProductoExito(producto));

      // Mostramos la alerta
      Swal.fire(
        "Producto Agregado",
        "El producto se agrego correctamente",
        "success"
      );
    } catch (error) {
      console.log(error);
      dispatch(agregarProductoError(true));

      Swal.fire({
        icon: "error",
        title: "Hubo un error",
        text: "Hubo un error, intenta de nuevo",
      });
    }
  };
};

const agregarProducto = () => ({
  type: AGREGAR_PRODUCTO,
  payload: true,
});

// Si el producto se guarda en la base de datos
const agregarProductoExito = (producto) => ({
  type: AGREGAR_PRODUCTO_EXITO,
  payload: producto,
});

// si hubo un error al guardar en la base de datos

const agregarProductoError = (estado) => ({
  type: AGREGAR_PRODUCTO_ERROR,
  payload: estado,
});

// **********  Obtener productos de la base de datos **********
export const obtenerProductosAction = () => {
  return async (dispatch) => {
    dispatch(obtenerProductos());

    try {
      const data = await db.collection("productos").get();

      const productos = data.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      dispatch(obtenerProductosExito(productos));
    } catch (error) {
      console.log(error);
      obtenerProductosError(true);
    }
  };
};

const obtenerProductos = () => ({
  type: OBTENER_PRODUCTOS,
  payload: true,
});

const obtenerProductosExito = (productos) => ({
  type: OBTENER_PRODUCTOS_EXITO,
  payload: productos,
});

const obtenerProductosError = (estado) => ({
  type: OBTENER_PRODUCTOS_ERROR,
  payload: estado,
});

// **********  Selecciona y elimina el producto **********
export const eliminarProductoAction = (id) => {
  return async (dispatch) => {
    dispatch(obtenerProductoEliminar(id));

    try {
      await db.collection("productos").doc(id).delete();
      Swal.fire("Eliminado", "El producto se eliminó correctamente", "success");
      dispatch(eliminarProductoExito());
    } catch (error) {
      console.log(error);
      dispatch(eliminarProductoError(true));

      Swal.fire({
        icon: "error",
        title: "Hubo un error",
        text: "Hubo un error, intenta de nuevo",
      });
    }
  };
};

const obtenerProductoEliminar = (id) => ({
  type: ELIMINAR_PRODUCTO,
  payload: id,
});

const eliminarProductoExito = () => ({
  type: ELIMINAR_PRODUCTO_EXITO,
});

const eliminarProductoError = (estado) => ({
  type: ELIMINAR_PRODUCTO_ERROR,
  payload: estado,
});

// **********  Obtener un producto **********

export const obtenerProductoEditarAction = (producto) => {
  return (dispatch) => {
    dispatch(obtenerProducto(producto));
  };
};

const obtenerProducto = (producto) => ({
  type: OBTENER_PRODUCTO_EDITAR,
  payload: producto,
});

// **********  Editar el producto en la BD y en el state **********
export const editarProductoAction = (producto) => {
  return async (dispatch) => {
    const { id, nombre, precio } = producto;

    dispatch(editarProducto());
    try {
      await db
        .collection("productos")
        .doc(id)
        .update({ nombre, precio: Number(precio) });
      dispatch(editarProductoExito(producto));

      // Mostramos la alerta
      Swal.fire(
        "Producto Editado",
        "El producto se editó correctamente",
        "success"
      );
    } catch (error) {
      console.log(error);
      dispatch(editarProductoError(true));

      Swal.fire({
        icon: "error",
        title: "Hubo un error",
        text: "Hubo un error, intenta de nuevo",
      });
    }
  };
};

const editarProducto = () => ({
  type: EDITAR_PRODUCTO,
});

const editarProductoExito = (producto) => ({
  type: EDITAR_PRODUCTO_EXITO,
  payload: producto,
});

const editarProductoError = (estado) => ({
  type: EDITAR_PRODUCTO_ERROR,
  payload: estado,
});
