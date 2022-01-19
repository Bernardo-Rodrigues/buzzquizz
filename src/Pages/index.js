import { Routes, Route } from "react-router-dom"
import Homepage from "./Homepage/"
import Quizz from "./QuizzPage/"
import CreateQuizz from "./CreateQuizzPage/"
import Header from "./GeniricComponents/Header"

export default function Pages() {
    return(
        <>
        <Header/>
        <Routes>
            <Route path="/" element={<Homepage/>}></Route>
            <Route path="/quizz/:quizzId" element={<Quizz/>}></Route>
            <Route path="/create-quizz/*" element={<CreateQuizz/>}></Route>
        </Routes>
        </>
    )
}