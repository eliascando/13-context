import './App.css'
import { PruebaContext } from './context/PruebaContext'
import { useEffect, useState } from 'react'
import { AppRouter } from './routes/AppRouter'

function App() {
  
  const [usuario, setUsuario] = useState({});

  useEffect(() => {
    //Cada vez que se recargue la pagina, se carga el usuario del localStorage
    let usuario_local = JSON.parse(localStorage.getItem('usuario'));
    setUsuario(usuario_local);
  },[]);

  useEffect(() => {
    //Cada vez que se actualice el usuario, se guarda en el localStorage
    if(usuario.username !== undefined){
      localStorage.setItem('usuario', JSON.stringify(usuario));
    }
  }, [usuario]);

  return (
    <>
      <PruebaContext.Provider value={{usuario, setUsuario}}>
        <AppRouter />
      </PruebaContext.Provider>
    </>
  )
}

export default App
