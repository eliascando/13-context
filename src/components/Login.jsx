import { useContext } from 'react';
import { PruebaContext } from '../context/PruebaContext';

export const Login = () => {

  const { setUsuario } = useContext(PruebaContext);

  const iniciarSesion = e => {
    e.preventDefault();
    let usuario = {
      nombre: e.target.nombre.value,
      username: e.target.username.value,
      edad: e.target.edad.value
    }
    console.log(usuario);
    setUsuario(usuario);
  }

  return (
    <div>
      <h1>Login</h1>
      <p>Pagina de login</p>

      <form className="login" onSubmit={iniciarSesion}>
        <input type="text" name='username' placeholder="Usuario"/>
        <input type="text" name='nombre' placeholder="Nombre" />
        <input type="text" name='edad' placeholder="Edad" />
        <input type="submit" value="Ingresar" />
      </form>

    </div>
  )
}