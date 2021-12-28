import styled from "styled-components";

export const Banner = styled.div`
    height: 227px;
    width: 100vw;
    position: relative;
    background: url( ${ ({img}) => img } );
    background-size:cover;

    div{
        font-style: normal;
        font-size: 39px;
        line-height: 46px;
        color: #fff;

        word-break: break-word;

        background-color: rgba(0, 0, 0, 0.57);

        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;

        padding: 10px;

        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
    }
`
export const QuestionWrapper = styled.div`
    width: 760px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    background-color: #fff;
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.05);

    padding: 28px 35px;
    margin: 42px 0;
`
export const QuestionTitle = styled.div`
    width: 690px;
    height: 138px;
    background: ${ ({bgColor}) => bgColor };

    margin-bottom: 20px;
    padding: 8px 18px;
    word-break: break-word;

    font-weight: 700;
    font-style: normal;
    font-size: 23px;
    line-height: 27px; 
    color: ${ ({textColor}) => textColor};

    display: flex;
    justify-content: center;
    align-items: center;
`
export const AnswersWrapper = styled.div`
    width: 690px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
`
export const Answer = styled.div`
    width: 330px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: space-evenly;

    cursor: pointer;

    margin-bottom: 18px;

    position: relative;

    img{
        height: 175px;
        margin-bottom: 8px;

        object-position: center;
        object-fit: cover;
    }

    span{
        font-weight: 700;
        font-style: bold;
        font-size: 20px;
        line-height: 23px;

        color: ${ ({status}) => !status  ? "#000" : status === "correct" ? "#0f0" : "#f00"};

        word-break: break-word;
    }
`
export const Fade = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;

    background-color: rgba(255, 255, 255, 0.70);
`