import { Banner } from "./styles"

export default function QuizzBanner({img, title}) {
    return(
        <Banner img={img}><div>{title}</div></Banner>
    )
}