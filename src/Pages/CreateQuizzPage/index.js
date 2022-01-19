import { Route, Routes } from "react-router";
import QuizzBasicInformations from "./components/QuizzBasicInformations"
import QuizzQuestions from "./components/QuizzQuestions"
import QuizzLevels from "./components/QuizzLevels"
import QuizzSucess from "./components/QuizzSucess"
import CreatingQuizzProvider from "../../Context/creatingQuizz";


export default function CreateQuizz() {
    return (
        <CreatingQuizzProvider>
            <Routes>
                <Route path="/" element={<QuizzBasicInformations/>}></Route>
                <Route path="/questions" element={<QuizzQuestions/>}></Route>
                <Route path="/levels" element={<QuizzLevels/>}></Route>
                <Route path="/sucess" element={<QuizzSucess/>}></Route>
            </Routes>
        </CreatingQuizzProvider>
    )
}