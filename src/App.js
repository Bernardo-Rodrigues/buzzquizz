import { GlobalStyle, Container } from "./Assets/css/styles"
import { BrowserRouter } from "react-router-dom"
import Pages from "./Pages"
import SelectedQuizzProvider from "./Context/selectedQuizz"

export default function App(){
    return(
        <SelectedQuizzProvider>
            <Container>
                <GlobalStyle/>
                <BrowserRouter>
                    <Pages/>
                </BrowserRouter>
            </Container>
        </SelectedQuizzProvider>
    )
}