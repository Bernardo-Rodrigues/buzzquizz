import styled from "styled-components";

export const Container = styled.div`
    padding-top: 80px;
    width:100%;
    
    h2{
        font-weight: bold;
        font-size: 20px;
        line-height: 23px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-bottom: 12px;
    }
    ul{
        display: flex;
        gap: 15px;
        flex-wrap: wrap;
    }
`

export const Quizz = styled.li`
    list-style: none;
    cursor: pointer;

    position: relative;
    width: 340px;
    height: 180px;

    background: url( ${ ({img}) => img } );
    background-size: cover;
    border-radius: 5px;
`

export const QuizzBackground = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 0 18px 8px 18px;
    border-radius: 5px;
    background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(0, 0, 0, 0.5) 64.58%,
        #000000 100%
    );
    color: #fff;
    font-size: 19px;
    font-weight: 400;
    cursor: pointer;
    word-break: break-word;
    display: flex;
    align-items: flex-end;
`