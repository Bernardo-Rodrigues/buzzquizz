
import { Link } from "react-router-dom"
import { Container, Quizz, QuizzBackground } from "../../pageStyles"

export default function AllQuizzes({quizzes}){

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