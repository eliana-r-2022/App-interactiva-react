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

