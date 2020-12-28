import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { obtenerProductosAction } from "../redux/actions/productoActions";
import { Producto } from "./Producto";
import { Spinner } from "./Spinner";

export const Productos = () => {
  const dispatch = useDispatch();
  const { productos, error, loading } = useSelector((state) => state.productos);

  useEffect(() => {
    dispatch(obtenerProductosAction());
  }, [dispatch]);

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-md-10">
          <h2 className="text-center mb-4">Listado de Productos</h2>

          {error && (
            <p className="alert alert-danger font-weight-bold text-center mt-4">
              Hubo un Error
            </p>
          )}

          {loading ? (
            <Spinner />
          ) : (
            <table className="table table-striped">
              <thead className="table-secondary">
                <tr>
                  <th scope="col">Nombre</th>
                  <th scope="col">Precio</th>
                  <th scope="col">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {productos.lenght === 0 ? (
                  <tr>
                    <td>No hay productos</td>
                    <td></td>
                    <td></td>
                  </tr>
                ) : (
                  productos.map((producto) => (
                    <Producto key={producto.id} producto={producto} />
                  ))
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};
