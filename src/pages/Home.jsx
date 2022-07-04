import {H1, H2} from "../styled/styled";

import {NavBar, DivHome, StyledLink} from "../styled/styled";


const Home = () => {
    return (
        <DivHome>
            <H1>Bienvenue</H1>
            <H2>Todolist Par Julien Pronost</H2>
            <NavBar>                
                    <StyledLink style={{fontSize:50, margin: 20}} to="/todo"><i className="fa-solid fa-list-check"></i></StyledLink>
                    <StyledLink style={{fontSize:50, margin: 20}} to="/loggin"><i className="fa-solid fa-user"></i></StyledLink>
            </NavBar>
        </DivHome>
    )
}
export default Home;