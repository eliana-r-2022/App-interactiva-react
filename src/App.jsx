import { useState } from "react";
import { catalogo } from "./data";
import CustomHeader from "./components/CustomHeader";
import CardGrid from "./components/CardGrid";

function App() {
  const [busqueda, setBusqueda] = useState("");

  const itemsFiltrados = catalogo.filter((item) =>
    item.titulo.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <>
      <CustomHeader
        title="Mi Catálogo"
        subtitle="Películas, juegos y anime"
      />

      <input
        type="text"
        placeholder="Buscar..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      <CardGrid items={itemsFiltrados} />
    </>
  );
}

export default App;
