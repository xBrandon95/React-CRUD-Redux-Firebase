import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import {
  eliminarProductoAction,
  obtenerProductoEditarAction,
} from "../redux/actions/productoActions";

export const Producto = ({ producto }) => {
  const { nombre, precio, id } = producto;

  const dispatch = useDispatch();
  const history = useHistory();

  const confirmarEliminarProducto = (id) => {
    Swal.fire({
      title: "¿Estas seguro?",
      text: "Un producto eliminado no se puede recuperar",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(eliminarProductoAction(id));
      }
    });
  };

  // Funcion para redireccionar
  const redireccionarEdicion = (producto) => {
    dispatch(obtenerProductoEditarAction(producto));
    history.push(`/productos/editar/${producto.id}`);
  };

  return (
    <tr>
      <td>{nombre}</td>
      <td>
        <span className="font-weight-bold">${precio}</span>
      </td>
      <td className="acciones">
        <button
          type="button"
          className="btn btn-success mr-4"
          onClick={() => redireccionarEdicion(producto)}
        >
          Editar
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => confirmarEliminarProducto(id)}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};
