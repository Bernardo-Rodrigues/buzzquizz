import { useEffect, useState } from "react"
import { useParams } from "react-router"
import QuizzBanner from "./components/QuizzBanner";
import Questions from "./components/QuizzQuestions";
import Result from "./components/QuizzResult";
import Loading from "../GeniricComponents/Loading";

import useApi from "../../Hooks/useApi";

export default function Quizz(){
    const { quizzId } = useParams();
    const [quizz, setQuizz] = useState(null);

    const [questionsAnswered, setQuestionsAnswered] = useState([])
    const [rightAnswers, setRightAnswers] = useState(0)
    const [wrongAnswers, setWrongAnswers] = useState(0)
    const [wrapperPos, setWrapperPos] = useState(0)

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
        <Questions 
        questions={quizz.questions} 
        selectedFromGlobal={quizz} 
        questionsAnswered={questionsAnswered} 
        rightAnswers={rightAnswers}
        wrongAnswers={wrongAnswers}
        setQuestionsAnswered={setQuestionsAnswered} 
        setRightAnswers={setRightAnswers}
        setWrongAnswers={setWrongAnswers}
        setWrapperPos={setWrapperPos}/>
        <Result
        questions={quizz.questions} 
        selectedFromGlobal={quizz} 
        questionsAnswered={questionsAnswered}
        rightAnswers={rightAnswers}
        wrongAnswers={wrongAnswers}
        wrapperPos={wrapperPos}
        />
        </>
    )
}