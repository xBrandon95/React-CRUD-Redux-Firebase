import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../hooks/useForm";
import {
  mostrarAlertaAction,
  ocultarAlertaAction,
} from "../redux/actions/alertaActions";
import { agregarProductoAction } from "../redux/actions/productoActions";
import { Spinner } from "./Spinner";

export const NuevoProducto = ({ history }) => {
  const [producto, handleInputChange] = useForm({
    nombre: "",
    precio: 0,
  });

  const { nombre, precio } = producto;

  // utilizamos dispatch para llamar a nuestras acciones
  const dispatch = useDispatch();

  // accedemos a los valores del store
  const { loading } = useSelector((state) => state.productos);
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

    // crear nuevo producto
    await dispatch(agregarProductoAction({ nombre, precio: nPrecio }));

    // redireccionar a productos
    history.push("/");
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-7">
        <div className="card">
          <div className="card-body p-lg-5">
            <h2 className="text-center font-weight-bold mb-4">
              Agregar Producto
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
                  onChange={handleInputChange}
                  autoComplete="off"
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
                  onChange={handleInputChange}
                  autoComplete="off"
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100  mt-4"
              >
                Agregar
              </button>
            </form>

            {loading && <Spinner />}
          </div>
        </div>
      </div>
    </div>
  );
};
