import {P, Todo, Delete} from "../styled/styled";
const Todos = ({value, id, Deletetodo}) => {
    
    return(
        <Todo>
            
            <P>Todo : {value}</P>
            <Delete onClick={() => Deletetodo(id)}><i className="fa-solid fa-ban"></i></Delete>
        </Todo>
    )
}
export default Todos