import { useState } from "react"
import { Link } from "react-router-dom"
import { Container, Quizz, QuizzBackground } from "../../pageStyles"
import { AddQuizz, NoQuizzes, YourQuizzesContainer } from "./styles"
import { AddCircle } from 'react-ionicons'

export default function YourQuizzes({quizzes}){
    const [quizzesLocalStorage, setQuizzesLocalStorage] = useState([
        {
            "id": 2205,
            "title": "kuikjiujuhygghfyhgfwefwefwefwef",
            "image": "https://images.twinkl.co.uk/tw1n/image/private/t_630_eco/image_repo/c6/d6/es-sl-2548156--letras-del-abecedario-con-animales_ver_2.webp",
            "questions": [
                {
                    "title": "ASDFASDFSADF",
                    "color": "#888888",
                    "answers": [
                        {
                            "text": "ASDFASDFSADFSADFSDSDFSAD",
                            "image": "https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027.jpg",
                            "isCorrectAnswer": true
                        },
                        {
                            "text": "TYJTFYJFTY",
                            "image": "https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027.jpg",
                            "isCorrectAnswer": false
                        },
                        {
                            "text": "TYJTYJTYJ",
                            "image": "https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027.jpg",
                            "isCorrectAnswer": false
                        },
                        {
                            "text": "FTYJFTYJ",
                            "image": "https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027.jpg",
                            "isCorrectAnswer": false
                        }
                    ]
                },
                {
                    "title": "FYJTYJTYJ",
                    "color": "#BBBBBB",
                    "answers": [
                        {
                            "text": "JTYJFTYJ",
                            "image": "https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027.jpg",
                            "isCorrectAnswer": true
                        },
                        {
                            "text": "FTYJFTYJ",
                            "image": "https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027.jpg",
                            "isCorrectAnswer": false
                        },
                        {
                            "text": "TYJFTYJ",
                            "image": "https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027.jpg",
                            "isCorrectAnswer": false
                        },
                        {
                            "text": "TYJTYJTHG",
                            "image": "https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027.jpg",
                            "isCorrectAnswer": false
                        }
                    ]
                },
                {
                    "title": "ASDFASDF",
                    "color": "#555555",
                    "answers": [
                        {
                            "text": "ASDFASDF",
                            "image": "https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027.jpg",
                            "isCorrectAnswer": true
                        },
                        {
                            "text": "HYTTYJTYJ",
                            "image": "https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027.jpg",
                            "isCorrectAnswer": false
                        },
                        {
                            "text": "TYJTY",
                            "image": "https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027.jpg",
                            "isCorrectAnswer": false
                        },
                        {
                            "text": "TYJTYJGFDHJ",
                            "image": "https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027.jpg",
                            "isCorrectAnswer": false
                        }
                    ]
                }
            ],
            "levels": [
                {
                    "title": "ASDFASEFWSEF",
                    "image": "https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027.jpg",
                    "text": "ASDFASDF",
                    "minValue": "20"
                },
                {
                    "title": "TYJTYJT",
                    "image": "https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027.jpg",
                    "text": "HYTJUUYIRTGF",
                    "minValue": "50"
                }
            ]
        }
    ])
    if(window.localStorage.getItem("quizzes")) setQuizzesLocalStorage([])


    return(
        <Container>
            {quizzesLocalStorage.length 
                ?   <YourQuizzesContainer data-identifier="quizz-card">
                        <AddQuizz>
                            <h2>Seus quizzes</h2>
                            <Link to="/create-quizz">
                                <button  data-identifier="create-quizz"><AddCircle color="#ec362d" width="40px" height="40px"/></button>
                            </Link>
                        </AddQuizz>
                        <ul>
                            {quizzesLocalStorage.map( quizz => (
                                <Link to={`/quizz/${quizz.id}`} key={quizz.id}>
                                    <Quizz img={quizz.image} id={quizz.id} data-identifier="quizz-card">
                                        <QuizzBackground>
                                            {quizz.title}
                                        </QuizzBackground>
                                    </Quizz>
                                </Link>
                            ))}
                        </ul>
                    </YourQuizzesContainer>
                :   <NoQuizzes>
                        <h2>Você não criou nenhum quizz ainda :(</h2>
                        <Link to="/create-quizz"><button data-identifier="create-quizz">Criar Quizz</button></Link>
                    </NoQuizzes>
            }
            
        </Container>
    )
}