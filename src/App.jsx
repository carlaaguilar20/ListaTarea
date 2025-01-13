import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './Header'
import { Formulario } from './Formulario'
import { ListarTareas } from './ListarTareas'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCrown } from '@fortawesome/free-solid-svg-icons' 
import ComponenteFecha from './FechaActual'



function App() {




const tareasGuardadas= localStorage.getItem('tareas') ? JSON.parse(localStorage.getItem('tareas')) : []

  const [tareas, setTareas]= useState(tareasGuardadas)

  let tareasCompletadas = ''
  if (localStorage.getItem('verCompletadas') ===null ){
    tareasCompletadas= true;
  } else{
    tareasCompletadas= localStorage.getItem('verCompletadas')==='true'
  }

  const [verCompletadas, setverCompletadas]= useState(tareasCompletadas)

  useEffect(()=>{
    localStorage.setItem('verCompletadas',verCompletadas.toString())
  },[verCompletadas])

  useEffect(()=>{
    localStorage.setItem('tareas',JSON.stringify(tareas))
  },[tareas])

console.log(tareas)
  return (
    <>
  <div className='contenedor' > 
   <ComponenteFecha/> 
      <Header verCompletadas={verCompletadas} setverCompletadas={setverCompletadas} />
      <Formulario tareas={tareas} setTareas={setTareas}/>
      <ListarTareas tareas={tareas} setTareas={setTareas} verCompletadas={verCompletadas} />
    </div>
    </>
  )
}

export default App
