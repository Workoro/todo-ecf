import { ContainerList, Input, Submit, Form, H1, ContainerTable, NavBar, StyledLink} from "../styled/styled";
import {useState} from "react";
import Listes from "../components/Listes";

const Table = () => {

    // ========================
    //         Hooks
    // ========================
    const [inputValue, setInputValue] = useState("");
    const [lists, setLists]  = useState([]);

    // ========================
    //         Function
    // ========================
    function handleChange(e){
        setInputValue(e.target.value)
    }
    function handleSubmit(e){
        e.preventDefault();
        setLists(prevState => [...prevState,
            {id: (Math.floor(Math.random()*100)),
            title:inputValue}])
        setInputValue("")
        console.log(inputValue);
    }
    function Deletelist(listId) {    
        let deletedlist = lists.filter((e) => e.id !== listId );
        setLists(deletedlist)
    }
    
    return(
        <>
        <NavBar>            
                <StyledLink style={{fontSize: 50, margin: 20}} to="/"><i className="fa-solid fa-house"></i></StyledLink>
                <StyledLink style={{fontSize: 50, margin: 20}} to="/loggin"><i className="fa-solid fa-user"></i></StyledLink>
        </NavBar>
            <ContainerTable>
                <H1>Tableau Todolists</H1>
                
                    <Form onSubmit={(e) => handleSubmit(e)}>
                        <Input style={{width: "25%"}} type="text" value={inputValue} placeholder="Nom de liste" onChange={(e) => handleChange(e)}></Input>
                        <Submit style={{width: "10%"}} type="submit">Envoyer</Submit>
                    </Form>
                
                <ContainerList>
                    {lists.map((list) =>(<Listes key={list.id} title={list.title} id={list.id} Deletelist={Deletelist}/>))}
                </ContainerList>
            </ContainerTable> 
        </>
    )
}
export default Table;