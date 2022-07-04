import {Submit, Div, NavBar, StyledLink} from "../styled/styled";
import {useState} from "react";


const Loggin = () =>{
    
    


    // ========================
    //     TRAVAIL EN COURS
    // ========================







     // ========================
    //         Hooks
    // ========================
    const [loggedIn, setLoggedIn] = useState(false)
     // ========================
    //         Function
    // ========================
    function logging(){
        setLoggedIn(!loggedIn)
    }
    return(
        <>
        <NavBar>            
                <StyledLink style={{fontSize:50, margin: 20}} to="/"><i className="fa-solid fa-house"></i></StyledLink>
                <StyledLink style={{fontSize:50, margin: 20}} to="/todo"><i className="fa-solid fa-list-check"></i></StyledLink>            
        </NavBar>   
            <Div>
                {loggedIn && (
                <Submit onClick={()=>logging()}>Se connecter</Submit>
                )}
                {!loggedIn && (
                    <Submit onClick={()=>logging()}>Se Déconnecter</Submit>
                )}
            </Div>
            
        </>
    )
}
export default Loggin