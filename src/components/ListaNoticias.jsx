import React, { useEffect, useState } from "react";
import Noticia from "./Noticia";

const ListaNoticias = ({ categoria }) => {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    const obtenerNoticias = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=3915464f90154c358eb2aeac8d0a9267`;
      const respuesta = await fetch(url);
      const noticiasData = await respuesta.json();
      setNoticias(noticiasData.articles);
    };

    obtenerNoticias();
  }, [categoria]);

  return (
    <div className="row">
      {noticias.map((noticia) => (
        <Noticia key={noticia.title} noticia={noticia} />
      ))}
    </div>
  );
};

export default ListaNoticias;
