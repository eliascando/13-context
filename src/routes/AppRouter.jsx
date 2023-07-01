import { BrowserRouter, Route, NavLink, Routes} from 'react-router-dom';
import { Inicio } from '../components/Inicio';
import { Articulos } from '../components/Articulos';
import { Login } from '../components/Login';
import { Acerca } from '../components/Acerca';
import { Contacto } from '../components/Contacto';
import { PruebaContext } from '../context/PruebaContext';
import { useContext } from 'react';

export const AppRouter = () => {

    const { usuario, setUsuario } = useContext(PruebaContext);

  return (
    <BrowserRouter>
    <header className='header'>
        {/*MENU NAVEGACION*/}
        <nav>
            <div className='logo'>
                <h2>LOGO</h2>
            </div>
            <ul>
                <li><NavLink to="/inicio" className="active">Inicio</NavLink></li>
                <li><NavLink to="/articulos" className="active">Articulos</NavLink></li>
                <li><NavLink to="/acerca" className="active">Acerca</NavLink></li>
                <li><NavLink to="/contacto" className="active">Contacto</NavLink></li>
                {usuario.hasOwnProperty("username") && usuario.username !== null
                    ?(
                        <>
                            <li>
                                <NavLink to="/" className="active">{usuario.username}</NavLink>
                            </li>
                            <li>
                                <a href='#' onClick={ e => {
                                    e.preventDefault();
                                    setUsuario({});
                                }}>Cerrar Sesión</a>
                            </li>
                        </>
                    ) 
                    :(
                        <li>
                            <NavLink to="/login" className="active">Login</NavLink>
                        </li>
                    )
                }
            </ul>
        </nav>
    </header>

    <section className='content'>
        {/*RUTAS*/}
        <Routes>
            <Route path="/" element={<Inicio/>}/>
            <Route path="/inicio" element={<Inicio/>}/>
            <Route path="/articulos" element={<Articulos/>}/>
            <Route path="/acerca" element={<Acerca/>}/>
            <Route path="/contacto" element={<Contacto/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path='*' element={<h1>404 - PAGINA NO EXISTE</h1>}/>{/*Ruta 404*/}
        </Routes>
    </section>

    </BrowserRouter>
  )
}
