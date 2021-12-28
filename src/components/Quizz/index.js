import { useEffect, useState } from "react"
import { useParams } from "react-router"
import axios from "axios";
import QuizzBanner from "./QuizzBanner";
import QuizzContainer from "./QuizzContainer";
import { LoadingScreen } from "../Loading/styles";

export default function Quizz(){
    const { quizzId } = useParams();
    const [quizz, setQuizz] = useState(null);

    useEffect(()=>{
        const promess = axios.get(`https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/${quizzId}`)
        promess.then(answer => setQuizz(answer.data))
    }, [quizzId])

    if(!quizz) return <LoadingScreen/>

    return(
        <>
        <QuizzBanner img={quizz.image} title={quizz.title}/>
        <QuizzContainer questions={quizz.questions} selectedFromGlobal={quizz}/>
        </>
    )
}