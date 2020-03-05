import axios from "axios";
import { useState } from "react";

export function withAuth() {
  const token = localStorage.getItem("token");
  const instance = axios.create({
    headers: {
      "Content-Type": "application/json",
      Authorization: token
    }
  });
  return instance;
}

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(key, () => {
    const currentValue = localStorage.getItem(key);

    return currentValue ? JSON.parse(currentValue) : initialValue;
  });

  const setValue = value => {
    setStoredValue(value);

    localStorage.setItem(key, JSON.stringify(value));
  };
  return [storedValue, setValue];
};

export const useForm = callback => {
  const [inputs, setInputs] = useState({});
  const handleSubmit = event => {
    if (event) {
      event.preventDefault();
    }
  };
  const handleInputChange = event => {
    event.persist();
    setInputs(inputs => ({
      ...inputs,
      [event.target.name]: event.target.value
    }));
  };
  return {
    handleSubmit,
    handleInputChange,
    inputs
  };
};
