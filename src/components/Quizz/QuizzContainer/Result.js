import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ConclusionWrapper, ConclusionTitle, ImgDescriptionWrapper, ResetQuizz, BackHome } from "../styles";

export default function Result({questions, selectedFromGlobal, rightAnswers, wrongAnswers, wrapperPos, questionsAnswered}) {

    const [final, setFinal] = useState(null)

    function windowScroller(position) {
        window.scrollTo({
            top: position,
            behavior: 'smooth'
        });
    }

    useEffect(()=> {
        let totalAnswers = rightAnswers + wrongAnswers;
        let adequateLevelindex

        if (totalAnswers === questions.length){
            let accuracy = Math.ceil((rightAnswers/totalAnswers)*100).toFixed();
    
            selectedFromGlobal.levels.forEach((level)=>{
                console.log(accuracy, level.minValue)
                if( accuracy >= Number(level.minValue)){
                    adequateLevelindex = selectedFromGlobal.levels.indexOf(level); 
                }
            })
            if(!adequateLevelindex) adequateLevelindex = 0
            setTimeout(()=>{
                setFinal(
                    <>
                        <ConclusionWrapper data-identifier="quizz-result">
                            <ConclusionTitle>{accuracy}% de acerto: {selectedFromGlobal.levels[adequateLevelindex].title}</ConclusionTitle>
                            <ImgDescriptionWrapper>
                                <img src={selectedFromGlobal.levels[adequateLevelindex].image} alt="description"/>
                                <p>{selectedFromGlobal.levels[adequateLevelindex].text}</p>
                            </ImgDescriptionWrapper>
                        </ConclusionWrapper>
                        <div className="reset-wrapper">
                            <ResetQuizz onClick={()=>window.location.reload()}>Reiniciar Quizz</ResetQuizz>
                            <Link to="/"><BackHome>Voltar pra home</BackHome></Link>
                        </div>
                    </>
                )
                
                const finalPos = wrapperPos-2*80;
                windowScroller(finalPos);
            }, 2000);
        }
    }, [questionsAnswered])

    return final
}