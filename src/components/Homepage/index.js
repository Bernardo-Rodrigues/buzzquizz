import { useLocation } from "react-router"
import { Container } from "../../css/styles"
import AllQuizzes from "../AllQuizzes"
import YourQuizzes from "../YourQuizzes"

export default function Homepage(){
    console.log(useLocation())
    return(
        <Container>
            <YourQuizzes/>
            <AllQuizzes/>
        </Container>
    )
}