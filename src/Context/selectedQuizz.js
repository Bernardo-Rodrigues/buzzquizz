import { useState, createContext } from "react"

export const SelectedQuizz = createContext();

export default function SelectedQuizzProvider({children}){
    const [quizz, setQuizz] = useState(null);
    const [questionsAnswered, setQuestionsAnswered] = useState([])
    const [rightAnswers, setRightAnswers] = useState(0)
    const [wrongAnswers, setWrongAnswers] = useState(0)
    const [wrapperPos, setWrapperPos] = useState(0)

    return <SelectedQuizz.Provider 
                value={{
                    quizz, 
                    setQuizz, 
                    questionsAnswered, 
                    setQuestionsAnswered, 
                    rightAnswers, 
                    setRightAnswers, 
                    wrongAnswers, 
                    setWrongAnswers,
                    wrapperPos,
                    setWrapperPos
                }}
            >{children}
            </SelectedQuizz.Provider>
}