import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons'
import { v4 as uuidv4 } from 'uuid';
import Swal from 'sweetalert2'

export const Formulario = ({tareas, setTareas}) => {
    const [tarea,setTarea] = useState('')
    const handletInput = (e)=> {
        const input = e.target.value
        setTarea(input)

    }
    const handleSubmit= (e)=> {
    e.preventDefault();
    const nuevaTarea= {
        id: uuidv4(),
        texto: tarea,
        completada:false,
    }
    if (nuevaTarea.texto==='' ) return
    setTareas([...tareas , nuevaTarea])
    Swal.fire({
        title: "Excelente!",
        text: "Agregaste una nueva tarea!",
        icon: "success",
        color:"#a84ebe",
        confirmButtonText: "listo",
        confirmButton:'#545454',
      });
    setTarea('')
    }
    return(
        <form action="" onSubmit={handleSubmit} className="formulario-tareas" >
            <input type="text" className="formulario-tareas__input" placeholder="Escribe la tarea" value={tarea} onChange={(e)=> handletInput(e) } />
            <button type="submit" className="formulario-tareas__btn" > <FontAwesomeIcon icon={faPlusCircle} className="formulario-tareas__icono-btn"/> </button>
        </form>
    )
}