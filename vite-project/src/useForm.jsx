import { useState } from "react";

export function useForm(initialValues = { username: "", password: "" }) {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return { values, handleChange };
}