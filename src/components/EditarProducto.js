import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../hooks/useForm";
import {
  mostrarAlertaAction,
  ocultarAlertaAction,
} from "../redux/actions/alertaActions";
import { editarProductoAction } from "../redux/actions/productoActions";

export const EditarProducto = ({ history }) => {
  const { productoeditar } = useSelector((state) => state.productos);
  const dispatch = useDispatch();

  const [producto, handleInputChange, setstate] = useForm({
    nombre: "",
    precio: 0,
  });

  useEffect(() => {
    if (productoeditar) {
      setstate(productoeditar);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productoeditar]);

  const { nombre, precio } = producto;

  const { alerta } = useSelector((state) => state.alerta);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let nPrecio = Number(precio);
    // validar formulario
    if (nombre.trim() === "" || nPrecio <= 0 || nPrecio === "") {
      const alerta = {
        msg: "Ambos campos son obligatorios",
        clases: "alert alert-danger text-center text-uppercase p3",
      };
      dispatch(mostrarAlertaAction(alerta));
      return;
    }

    // si no hay errores
    dispatch(ocultarAlertaAction());

    // editar el producto
    await dispatch(editarProductoAction(producto));

    // redireccionar a productos
    history.push("/");
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-7">
        <div className="card">
          <div className="card-body p-lg-5">
            <h2 className="text-center font-weight-bold mb-4">
              Editar Producto
            </h2>

            {alerta && <p className={alerta.clases}>{alerta.msg}</p>}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Nombre:</label>
                <input
                  type="text"
                  name="nombre"
                  value={nombre}
                  className="form-control"
                  placeholder="Nombre del Producto"
                  autoComplete="off"
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Precio:</label>
                <input
                  type="number"
                  name="precio"
                  value={precio}
                  className="form-control"
                  placeholder="Precio del Producto"
                  autoComplete="off"
                  onChange={handleInputChange}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100 mt-4 mb-3"
              >
                Guardar Cambios
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
