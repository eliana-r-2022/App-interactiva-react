//título de la app y subtítulo
// Aclaración --> Lógica y retorno: en los componentes, tratar de hacer toda la lógica afuera del return, el return debe quedar lo más limpio posible.

function CustomHeader({ title, subtitle }) {
  return (
    <>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </>
  );
}

export default CustomHeader;