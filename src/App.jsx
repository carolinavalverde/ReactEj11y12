import React, { useState } from "react";
import Titulo from "./components/Titulo";
import Formulario from "./components/Formulario";
import ListaNoticias from "./components/ListaNoticias";

function App() {
  const [categoria, setCategoria] = useState("general");

  return (
    <div className="container">
      <Titulo />
      <Formulario setCategoria={setCategoria} />
      <ListaNoticias categoria={categoria} />
    </div>
  );
}

export default App;
