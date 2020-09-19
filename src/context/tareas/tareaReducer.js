
import { AGREGAR_TAREA, 
    TAREAS_PROYECTO, 
    VALIDAR_TAREA, 
    ELIMINAR_TAREA, 
    ESTADO_TAREA } from '../../types'


export default (state, action) => {
    switch(action.type) {
        case TAREAS_PROYECTO:
            return {
                ...state, 
                tareasproyecto: state.tareas.filter(tarea => tarea.proyectoId === action.payload)
            }
        case AGREGAR_TAREA: 
            return {
                ...state, 
                tareas: [action.payload, ...state.tareas], 
                errorTarea: false
            }
        case VALIDAR_TAREA: 
            return {
                ...state, 
                errorTarea: true
            }
        case ELIMINAR_TAREA: 
            return {
                ...state, 
                tareas: state.tareas.filter(tarea => tarea.id !== action.payload)
            }
        case ESTADO_TAREA: 
            return {
                ...state, 
                tareas: state.tareasproyecto.map(tarea => tarea.id === action.payload.id ? action.payload : tarea)
            }
        default: 
            return state;
    }
}