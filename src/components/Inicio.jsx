import { useContext } from 'react';
import { PruebaContext } from '../context/PruebaContext';

export const Inicio = () => {

  const { usuario } = useContext(PruebaContext);

  return (
    <div>
      <h1>Inicio</h1>
      <p>Pagina de inicio</p>
      <p>Nombre: {usuario.nombre}</p>
      <p>Edad: {usuario.edad}</p>
      {/*<p>Contexto compartido: <pre>{JSON.stringify(contextoCompartido)}</pre></p>*/}
    </div>
  )
}