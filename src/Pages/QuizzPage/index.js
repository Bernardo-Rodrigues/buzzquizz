import { useEffect, useState, useContext } from "react"
import { useParams } from "react-router"
import QuizzBanner from "./components/QuizzBanner";
import Questions from "./components/QuizzQuestions";
import Result from "./components/QuizzResult";
import Loading from "../GeniricComponents/Loading";
import { SelectedQuizz } from "../../Context/selectedQuizz";

import useApi from "../../Hooks/useApi";

export default function Quizz(){
    const { quizzId } = useParams();
    const { quizz, setQuizz } = useContext(SelectedQuizz)

    const api = useApi();

    useEffect(()=>{
        api.quizz
            .getQuizz(quizzId)
            .then(answer => setQuizz(answer.data))
    }, [api.quizz, quizzId])

    if(!quizz) return <Loading/>

    return(
        <>
        <QuizzBanner img={quizz.image} title={quizz.title}/>
        <Questions/>
        <Result/>
        </>
    )
}