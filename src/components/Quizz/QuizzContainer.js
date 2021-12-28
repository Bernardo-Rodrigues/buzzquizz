import { useState } from "react";
import { QuestionWrapper, QuestionTitle, AnswersWrapper, Answer, Fade } from "./styles";

export default function QuizzContainer({questions, selectedFromGlobal}) {
    let arrayJSX  = []
    let textColor = ""
    let rightAnswers = 0
    let wrongAnswers = 0
    let click 
    const [questionsAnswered, setQuestionsAnswered] = useState([])
    const [answered, setAnswered] = useState([])
    

    function windowScroller(position) {
        window.scrollTo({
            top: position,
            behavior: 'smooth'
        });
    }


    function selectingAnswer(e) {
        let wrapper = e.currentTarget.parentNode.classList[3][7];
        setQuestionsAnswered([...questionsAnswered, parseInt(wrapper)])
        setAnswered([...answered, e.currentTarget.id])
        checkAnswer(e.currentTarget);

        const wrapperPos = e.currentTarget.parentNode.offsetTop;

        if (wrapper < selectedFromGlobal.questions.length-1) {
            setTimeout(()=>{
                windowScroller(wrapperPos+450-80);
            },2000);
        }
    }

    function checkAnswer(answer) {
        if(answer.className.split(" ")[2] === 'true') {
            rightAnswers++;
        } else { wrongAnswers++; }
    
        concludeQuizz(rightAnswers, wrongAnswers, selectedFromGlobal);
    }

    function concludeQuizz(wins, losses, {questions, levels}){
    }

    questions.forEach( ({title, color, answers}, index) =>{
        answers.sort(()=>Math.random() - 0.5);
        textColor = (color[1] === "f" && color[3] === "f" && color[5] === "f") ? "#000" : "#fff"
        arrayJSX.push(
            <QuestionWrapper data-identifier="general-quizzes" key={index}>
                <QuestionTitle bgColor={color} textColor={textColor}>{title}</QuestionTitle>
                <AnswersWrapper className={`answers-wrapper wrapper${index}`}>
                    {answers.map( ({text, image, isCorrectAnswer}, i) => {
                        let id = `${index} - ${i}`  
                        let status = questionsAnswered.includes(index) ? isCorrectAnswer ? "correct" : "incorrect" : ""
                        {questionsAnswered.includes(index) ? click=()=>{} : click = selectingAnswer}
                        return(
                            <Answer className={`${isCorrectAnswer}`} data-identifier="answer" id={id} key={id} onClick={click} status={status}>
                                <img src={`${image}`} alt="answer"/>
                                <span >{text}</span>
                                {questionsAnswered.includes(index) && !answered.includes(id) && <Fade/> }
                                
                            </Answer>
                        )
                    })}
                </AnswersWrapper>
            </QuestionWrapper>
        )   
    })
    
    return arrayJSX
}
