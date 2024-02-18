import React from "react";

const Noticia = ({ noticia }) => {
  const { title, author, description, urlToImage } = noticia;

  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <img src={urlToImage} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">Autor: {author}</p>
          <a href="#" className="btn btn-primary">
            Ver Noticia Completa
          </a>
        </div>
      </div>
    </div>
  );
};

export default Noticia;
