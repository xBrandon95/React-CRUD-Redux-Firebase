import { useState } from "react";

export const useForm = (initialState) => {
  const [state, setstate] = useState(initialState);

  const handleInputChange = (e) => {
    setstate({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return [state, handleInputChange];
};
