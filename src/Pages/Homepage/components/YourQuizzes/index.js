import { useState } from "react"
import { Link } from "react-router-dom"
import { Container } from "../../pageStyles"
import { AddQuizz, NoQuizzes, YourQuizzesContainer } from "./styles"

export default function YourQuizzes({quizzes}){
    const [quizzesLocalStorage, setQuizzesLocalStorage] = useState([])
    if(window.localStorage.getItem("quizzes")) setQuizzesLocalStorage([])


    return(
        <Container>
            {quizzesLocalStorage.length 
                ?   <YourQuizzesContainer data-identifier="quizz-card">
                        <AddQuizz>
                            <h2>Seus quizzes</h2>
                            <button  data-identifier="create-quizz"><ion-icon name="add-circle"></ion-icon></button>
                        </AddQuizz>
                        <ul>
            
                        </ul>
                    </YourQuizzesContainer>
                :   <NoQuizzes>
                        <h2>Você não criou nenhum quizz ainda :(</h2>
                        <Link to="/create-quizz/basic-informations"><button data-identifier="create-quizz">Criar Quizz</button></Link>
                    </NoQuizzes>
            }
            
        </Container>
    )
}