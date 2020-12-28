import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { EditarProducto } from "./components/EditarProducto";
import { Header } from "./components/Header";
import { NuevoProducto } from "./components/NuevoProducto";
import { Productos } from "./components/Productos";

import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />

        <div className="container mt-4">
          <Switch>
            <Route exact path="/" component={Productos} />
            <Route exact path="/productos/nuevo" component={NuevoProducto} />
            <Route
              exact
              path="/productos/editar/:id"
              component={EditarProducto}
            />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
