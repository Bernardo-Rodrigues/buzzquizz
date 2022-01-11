import { useState } from "react";
import Questions from "./Questions";
import Result from "./Result";
export default function QuizzContainer({questions, selectedFromGlobal}) {
    
    const [questionsAnswered, setQuestionsAnswered] = useState([])
    const [rightAnswers, setRightAnswers] = useState(0)
    const [wrongAnswers, setWrongAnswers] = useState(0)
    const [wrapperPos, setWrapperPos] = useState(0)
    

    
    return (
        <>
        <Questions 
        questions={questions} 
        selectedFromGlobal={selectedFromGlobal} 
        questionsAnswered={questionsAnswered} 
        rightAnswers={rightAnswers}
        wrongAnswers={wrongAnswers}
        setQuestionsAnswered={setQuestionsAnswered} 
        setRightAnswers={setRightAnswers}
        setWrongAnswers={setWrongAnswers}
        setWrapperPos={setWrapperPos}/>
        <Result
        questions={questions} 
        selectedFromGlobal={selectedFromGlobal} 
        questionsAnswered={questionsAnswered}
        rightAnswers={rightAnswers}
        wrongAnswers={wrongAnswers}
        wrapperPos={wrapperPos}
        />
        </>
    )
}
