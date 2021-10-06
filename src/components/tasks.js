import react from 'react';
class Tasks extends react.Component{
    render(){
        return this.props.tasks.map(/*la funcion map permite recorrer el arreglo en la misma posicion pero agregando modificaciones*/
            e =>  <p key={e.id}> 
            {e.title}-{e.description}-{e.id}
            <input type="checkbox"/>
            <button>
                Eliminar
            </button>
          </p>)
    }
}

export default Tasks;