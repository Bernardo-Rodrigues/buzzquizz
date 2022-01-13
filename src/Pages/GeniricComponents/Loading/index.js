import { LoadingScreen, Load, Spinner } from "./styles"

export default function Loading(){
    return(
        <LoadingScreen>
            <Spinner>
                <Load>
                    <div></div>
                </Load>
            </Spinner>
            <span>Carregando</span>
        </LoadingScreen>
        
    )
}