import React from "react";

const Formulario = ({ setCategoria }) => {
  const handleChange = (e) => {
    setCategoria(e.target.value);
  };

  return (
    <form>
      <label htmlFor="categoria">Selecciona una categoría:</label>
      <select id="categoria" onChange={handleChange}>
        <option value="general">General</option>
        <option value="business">Negocios</option>
        <option value="entertainment">Entretenimiento</option>
        <option value="health">Salud</option>
        <option value="science">Ciencia</option>
        <option value="sports">Deportes</option>
        <option value="technology">Tecnología</option>
      </select>
    </form>
  );
};

export default Formulario;
