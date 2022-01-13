import { Banner } from "../../pageStyles"

export default function QuizzBanner({img, title}) {
    return(
        <Banner img={img}><div>{title}</div></Banner>
    )
}