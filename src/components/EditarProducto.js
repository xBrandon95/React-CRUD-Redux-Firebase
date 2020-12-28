export const EditarProducto = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-md-7">
        <div className="card">
          <div className="card-body p-md-5">
            <h2 className="text-center font-weight-bold mb-4">
              Editar Producto
            </h2>

            <form>
              <div className="form-group">
                <label>Nombre:</label>
                <input
                  type="text"
                  name="nombre"
                  className="form-control"
                  placeholder="Nombre del Producto"
                />
              </div>
              <div className="form-group">
                <label>Precio:</label>
                <input
                  type="number"
                  name="precio"
                  className="form-control"
                  placeholder="Precio del Producto"
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
