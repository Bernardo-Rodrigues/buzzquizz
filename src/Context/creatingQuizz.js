import { useState, createContext } from "react"

export const CreatingQuizz = createContext();

export default function CreatingQuizzProvider({children}){
    const [newQuizz, setNewQuizz] = useState({
        title:"",
        image:"",
        questions:[],
        levels:[]
    })

    return <CreatingQuizz.Provider value={{ newQuizz, setNewQuizz }}>{children}</CreatingQuizz.Provider>
}