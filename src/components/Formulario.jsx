import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Formulario = ({ setCategoria }) => {
  const handleChange = (e) => {
    setCategoria(e.target.value);
  };

  return (
    <section className="container mt-3 mb-5">
      <form className="display-6">
        <label htmlFor="categoria" className="me-3">Selecciona una categoría:</label>
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
    </section>
  );
};

export default Formulario;
