import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Container, Quizz, QuizzBackground } from "../Homepage/styles"
import Loading from "../Loading"

export default function AllQuizzes(){
    const [quizzes, setQuizzes] = useState(null)

    useEffect(()=>{
        const promess = axios.get("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes")
        promess.then( answer => setQuizzes(answer.data))
    }, [])

    if(!quizzes) return <Loading/>

    return(
        <Container>
            <h2>Todos os quizzes</h2>
            <ul>
                {quizzes.map( quizz => (
                    <Link to={`/quizz/${quizz.id}`} key={quizz.id}>
                        <Quizz img={quizz.image} id={quizz.id} data-identifier="quizz-card">
                            <QuizzBackground>
                                {quizz.title}
                            </QuizzBackground>
                        </Quizz>
                    </Link>
                ))}
            </ul>
        </Container>
    )
}