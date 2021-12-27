import { QuestionWrapper, QuestionTitle, AnsersWrapper, Answer } from "./styles";

export default function QuizzContainer({questions}) {
    let i = 0;
    let arrayJSX  = []
    let textColor

    questions.forEach( ({title, color, answers}, index) =>{
        answers.sort(()=>Math.random() - 0.5);
        textColor = (color[1] === "f" && color[3] === "f" && color[5] === "f") ? "#000" : "#fff"
        arrayJSX.push(
            <QuestionWrapper data-identifier="general-quizzes" key={index}>
                <QuestionTitle bgColor={color} textColor={textColor}>${title}</QuestionTitle>
                <AnsersWrapper className={`answers-wrapper wrapper${i}`}>
                    {answers.map( ({text, image, isCorrectAnswer}, index) => {
                        return(
                            <Answer id={`${isCorrectAnswer}`} data-identifier="answer" key={index}>
                                <img src={`${image}`} alt="answer"/>
                                <span>{text}</span>
                                <div className="fade none"></div>
                            </Answer>
                        )
                    })}
                </AnsersWrapper>
            </QuestionWrapper>
        )   
    })
    
    return arrayJSX
}
