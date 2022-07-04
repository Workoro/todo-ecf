import { Input, Submit, Form, ContainerTodo, Div, H2, Delete} from "../styled/styled";
import {useState} from "react";
import Todos from "./Todos";
 const Listes = ({title, id, Deletelist}) => {

    // ========================
    //         Hooks
    // ========================
    const [inputValue, setInputValue] = useState("");
    const [listTodos, setListTodos] = useState([]);


    // ========================
    //         Functions
    // ========================
    function handleChange(e){
        setInputValue(e.target.value)
    }
    function handleSubmit(e){
        e.preventDefault();
        if(inputValue){
        setListTodos(prevState => [...prevState,
             {id: (Math.floor(Math.random()*100)),
            value:inputValue}
        ])}
        setInputValue("")

    }    
    function Deletetodo(todoId){
        let deletedtodo = listTodos.filter((e) => e.id !== todoId );
        setListTodos(deletedtodo)       
    };

    return (
        <ContainerTodo>
            <H2>Liste : {title}</H2>
            <Form onSubmit={(e) => handleSubmit(e)}>
                <Input type="text" value={inputValue} placeholder="Entrez une tâche" onChange={(e) => handleChange(e)}></Input>
                <Submit type="submit">Envoyer</Submit>
            </Form>            
            <Div>{listTodos.map((todo) => (<Todos key={todo.id} value={todo.value} id={todo.id} Deletetodo={Deletetodo} />))}</Div>
            <Delete onClick={() => Deletelist(id)}><i className="fa-solid fa-ban"></i></Delete>
        </ContainerTodo>

    )
}
export default Listes