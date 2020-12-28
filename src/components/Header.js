import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary p-1">
      <div className="container d-flex">
        <h1 className="mb-3">
          <Link to={"/"} className="text-white text-decoration-none">
            CRUD - React, Redux y Firebase
          </Link>
        </h1>
        <Link
          to={"/productos/nuevo"}
          className="btn btn-info nuevo-post d-block d-md-inline-block"
        >
          Agregar Producto &#43;
        </Link>
      </div>
    </nav>
  );
};
