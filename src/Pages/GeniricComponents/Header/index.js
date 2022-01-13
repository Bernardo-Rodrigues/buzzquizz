import { HeaderElement } from "./styles"

export default function Header(){
    return <HeaderElement><h1 onClick={()=>window.location.reload()}>BuzzQuizz</h1></HeaderElement>
}