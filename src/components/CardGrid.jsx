// Contenedor: Debe recibir el arreglo de datos por props y utilizar el método .map() para renderizar una tarjeta por cada elemento.

import ItemCard from "./ItemCard";

function CardGrid({ items }) {
  return (
    <div className="grid">
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
}

export default CardGrid;

