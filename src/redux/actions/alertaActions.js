import { MOSTRAR_ALERTA, OCULTAR_ALERTA } from "../types";

// **********  Muestra una Alerta **********
export const mostrarAlertaAction = (alerta) => {
  return (dispatch) => {
    dispatch(mostrarAlerta(alerta));
  };
};

const mostrarAlerta = (alerta) => ({
  type: MOSTRAR_ALERTA,
  payload: alerta,
});

export const ocultarAlertaAction = () => {
  return (dispatch) => {
    dispatch(ocultarAlerta());
  };
};

const ocultarAlerta = () => ({
  type: OCULTAR_ALERTA,
});
