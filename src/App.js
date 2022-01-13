import { GlobalStyle, Container } from "./Assets/css/styles"
import { BrowserRouter } from "react-router-dom"
import Pages from "./Pages"

export default function App(){
    return(
        <Container>
            <GlobalStyle/>
            <BrowserRouter>
                <Pages/>
            </BrowserRouter>
        </Container>
    )
}