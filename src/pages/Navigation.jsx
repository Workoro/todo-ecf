import {Routes, Route} from "react-router-dom";
import Home from "./Home";
import Table from "./TodoTable";
import Blabla from "./Blabla";
import Loggin from "./Login";





const Nav = () => {
       
    return(
        <>
                 
            <Routes>
                
                <Route index element={<Home/>}/>
                <Route path="/todo" element={<Table/>} />
                <Route path="/loggin" element={<Loggin/>} />
                <Route path="/blabla" element={<Blabla/>} />
            
            </Routes>        
        </>
        )
}
export default Nav;