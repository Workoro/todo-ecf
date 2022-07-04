
import {Blabla, Submit} from "../styled/styled"

const Secret = () => {
    function Blablabla() {
        
        let patate = document.getElementById("1");
        if(patate.style.display === "none"){
            patate.style.display = "block";
        }else{
            patate.style.display = "none";
        }
      }
    return(
        <>
        <Blabla id="1" src="https://play-lh.googleusercontent.com/pl6cdJ7o-2-w_oQzfWQre9bMhg5RW_pTGXmztKhbRNlG7Y4AEYwfXymtTS3_g-PNaw"/>
        <Submit onClick={() => Blablabla()}>Jimmy c'est quoi une props?</Submit>
        </>
        
    )
}
export default Secret;