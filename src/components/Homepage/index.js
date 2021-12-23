import { useLocation } from "react-router"
import AllQuizzes from "../AllQuizzes"
import YourQuizzes from "../YourQuizzes"

export default function Homepage(){
    console.log(useLocation())
    return(
        <>
            <YourQuizzes/>
            <AllQuizzes/>
        </>
    )
}