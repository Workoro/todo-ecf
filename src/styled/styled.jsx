import styled from "styled-components";
import {Link} from "react-router-dom";

export const ContainerTable = styled.div `
    border: 1px solid black;
    width: 100%;
    text-align: center;
`
export const ContainerList = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 1%;
    width: 100%;
    justify-content: space-around; 
    
`
export const H1 = styled.h1`
    font-size: 40px;
`
export const H2 = styled.h2`
    font-size: 30px;
`
export const P = styled.p`

`
export const NavBar = styled.nav`
    width: 100%;
    text-align: center;
    
`
export const Todo = styled.div`
    width: 100%;
    border: 1px solid black;
    box-shadow: 0px 0px 10px black;
    margin: 3px 15px;   
    
`
export const ContainerTodo = styled.div`
    width: 24%;
    border : 1px solid black;
    text-align: center;
    padding: 2%;
    box-shadow: 0px 0px 15px black;
`
export const Div = styled.div`  
    width: 90%;
    
    
      
`
export const Form = styled.form`

`
export const Input = styled.input`
    width: 70%;
    font-size: 20px;
    height: 39px;
    vertical-align: middle;
   
    
`
export const Submit = styled.button`
    width: 20%;
    background-color: green;
    color: white;
    height: 45px;
    &:hover{
        box-shadow: 0px 0px 15px green;
    }
    
`
export const Delete = styled.button`
    background-color: red;
    color: white;
    &:hover{
        box-shadow: 0px 0px 15px red;
    }
`
export const DivHome = styled.div`
    text-align: center;
`
export const  ThemeButton = styled.button`
        width: 10%;
        background-color: yellow;
        color: black;
        height: 45px;
        &:hover{
            box-shadow: 0px 0px 15px yellow;
            cursor: pointer;
        }
`
export const StyledLink = styled(Link)`
    color: blue;
    font-size: 50px;
    margin: 20px;
    &:hover{
        color: gray;
        text-shadow: 0px 0px 15px blue;
    }
`



























export const Blabla = styled.img`
    display: none;
`
