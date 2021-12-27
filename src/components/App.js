import { GlobalStyle, Container } from "../css/styles"
import { BrowserRouter ,Routes, Route } from "react-router-dom"
import Homepage from "./Homepage"
import Header from "./Header"
import Quizz from "./Quizz"

export default function App(){
    return(
        <Container>
            <GlobalStyle/>
            <Header/>

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage/>}></Route>
                    <Route path="/quizz/:quizzId" element={<Quizz/>}></Route>
                </Routes>
            </BrowserRouter>
        </Container>
    )
}