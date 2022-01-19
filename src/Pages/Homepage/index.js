import { useEffect, useState } from "react"
import { Container } from "../../Assets/css/styles"
import AllQuizzes from "./components/AllQuizzes"
import YourQuizzes from "./components/YourQuizzes"

import useApi from "../../Hooks/useApi";
import Loading from "../GeniricComponents/Loading";

export default function Homepage(){
    const [quizzes, setQuizzes] = useState([])
    const api = useApi();

    useEffect(()=>{
        api.quizzes
            .getQuizzes()
            .then( answer => setQuizzes(answer.data))
            //eslint-disable-next-line
    }, [])
    if(!quizzes.length) return <Loading/>

    return(
        <Container>
            <YourQuizzes quizzes={quizzes}/>
            <AllQuizzes quizzes={quizzes}/>
        </Container>
    )
}