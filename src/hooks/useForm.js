import { useState } from "react";

export const useForm = (initialState) => {
  const [state, setState] = useState(initialState);

  const handleInputChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return [state, handleInputChange, setState];
};
