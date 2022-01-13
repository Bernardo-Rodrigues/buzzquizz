import { useContext, useEffect, useState } from "react"
import { SelectedQuizz } from "../../../../Context/selectedQuizz"
import {QuestionWrapper, QuestionTitle, AnswersWrapper, Answer, Fade } from "../../pageStyles"

export default function  Questions() {
    const [ questionsShuffled, setQuestionsShuffled] = useState([])
    
    const [answered, setAnswered] = useState([])

    const { quizz, questionsAnswered, setQuestionsAnswered, rightAnswers, setRightAnswers, wrongAnswers, setWrongAnswers, setWrapperPos } = useContext(SelectedQuizz)

    const questions= quizz.questions 
    const selectedFromGlobal=quizz

    function selectingAnswer(e) {
        let wrapper = e.currentTarget.parentNode.classList[3][7];
        setQuestionsAnswered([...questionsAnswered, parseInt(wrapper)])
        setAnswered([...answered, e.currentTarget.id])
        

        const wrapperPos = e.currentTarget.parentNode.offsetTop;
        checkAnswer(e.currentTarget, wrapperPos);

        if (wrapper < selectedFromGlobal.questions.length-1) {
            setTimeout(()=>{
                windowScroller(wrapperPos+450-80);
            },2000);
        }
    }
    function checkAnswer(answer, wrapperPos) {
        if(answer.className.split(" ")[2] === 'true') {
            setRightAnswers(rightAnswers + 1);
        } else { setWrongAnswers(wrongAnswers + 1); }
        setWrapperPos(wrapperPos)
    }

    function windowScroller(position) {
        window.scrollTo({
            top: position,
            behavior: 'smooth'
        });
    }

    function shuffleArray(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }   

    useEffect(()=>{
        questions.forEach(element => {
            element.answers = shuffleArray(element.answers)
        })
        setQuestionsShuffled(questions)
    }, [])

    return(
        <>
            {questionsShuffled.map( ({title, color, answers}, index) =>{ 
                let textColor = (color[1] === "f" && color[3] === "f" && color[5] === "f") ? "#000" : "#fff"
                
                return(
                    <QuestionWrapper data-identifier="general-quizzes" key={index}>
                        <QuestionTitle bgColor={color} textColor={textColor}>{title}</QuestionTitle>
                        <AnswersWrapper className={`answers-wrapper wrapper${index}`}>
                            {answers.map( ({text, image, isCorrectAnswer}, i) => {
                                
                                let id = `${index} - ${i}`  
                                let status = questionsAnswered.includes(index) ? isCorrectAnswer ? "correct" : "incorrect" : ""
                                let click = questionsAnswered.includes(index) ? ()=>{} : selectingAnswer
                                
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
            })}
        </>
    )
}