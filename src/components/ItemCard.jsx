// El componente visual de la tarjeta. Debe recibir por props la información individual de un ítem (título, categoría, año) y mostrarla en pantalla.

import { useState } from "react";
import "./css/estilos.css";

function ItemCard({ item }) {
  const [favorito, setFavorito] = useState(false);

  return (
    <div className={`card ${item.destacado ? "destacado" : ""}`}>
      
      <img
         src={item.imagen || "/imagenes/placeholder.jpg"}
  alt={item.titulo}
  className="card-img"
  onError={(e) => {
    e.target.src = "/imagenes/placeholder.jpg";
  }}
      />

      <div className="card-content">
        <h3>{item.titulo}</h3>
        <p>{item.categoria}</p>
        <p>{item.anio}</p>

        <button onClick={() => setFavorito(!favorito)}>
          {favorito ? "❤️ Quitar" : "🤍 Favorito"}
        </button>
      </div>

    </div>
  );
}

export default ItemCard;
