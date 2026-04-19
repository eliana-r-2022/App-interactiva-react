import { useState } from "react";
import "./css/estilos.css";

function ItemCard({ item }) {
  const [favorito, setFavorito] = useState(false);
  const placeholder = "/imagenes/placeholder.jpg";

  return (
    <div className={`card ${item.destacado ? "destacado" : ""}`}>
      
      {/* Renderizado condicional */}
      <div className="card-header">
        {item.imagen ? (
          <img 
            src={item.imagen} 
            alt={item.titulo} 
            className="card-img" 
          />
        ) : (
          <img 
            src={placeholder} 
            alt="Imagen no disponible" 
            className="card-img" 
          />
        )}
      </div>

      <div className="card-content">
        <h3>{item.titulo}</h3>
        <p>{item.categoria}</p>
        <p>{item.anio}</p>

        <button 
          className={favorito ? "btn-fav active" : "btn-fav"} 
          onClick={() => setFavorito(!favorito)}
        >
          {favorito ? "❤️ Quitar" : "🤍 Favorito"}
        </button>
      </div>

    </div>
  );
}

export default ItemCard;
