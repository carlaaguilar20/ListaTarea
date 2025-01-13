import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheckCircle, faCircle, faEdit, faTimes} from '@fortawesome/free-solid-svg-icons'

export const Tareas=({tarea , tareaCompletada , editaTarea , eliminarTarea})=>{
    const [editarTarea ,setEditarTarea] = useState(false)
    const [nuevaTarea, setNuevaTarea] = useState(tarea.texto)

    const handleSubmit =(e)  =>{
        e.preventDefault();
        editaTarea(tarea.id, nuevaTarea)
        setEditarTarea(false)
    }

    return (
      <li className="lista-tareas__tarea">
      <FontAwesomeIcon icon={ tarea.completada ? faCheckCircle : faCircle} className="lista-tareas__icono-check lista-tareas__icono " onClick={()=> tareaCompletada(tarea.id)} />
      <div className="lista-tarea__texto" >
        {
            editarTarea ? 
            <form action=""className="formulario-editar-tarea" onSubmit={handleSubmit} >
                <input type="text" className="formulario-editar-tarea__input" value={nuevaTarea} onChange={(e)=> setNuevaTarea(e.target.value)} />
                <button type="submit" className="formulario-editar-tarea__btn">
                 Actualizar
                </button>
            </form>
            : tarea.texto
        }
      </div>
      <div className="lista-tareas__contenedor-botones">
      <FontAwesomeIcon icon={faEdit} className="lista-tareas__icono-accion lista-tareas__icono" onClick={() => setEditarTarea(!editarTarea)}  />
      <FontAwesomeIcon icon={faTimes} className="lista-tareas__icono-accion lista-tareas__icono"  onClick={()=> eliminarTarea(tarea.id)} />
      </div>
      </li>
    )
}