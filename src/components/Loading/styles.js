import styled from "styled-components";

export const LoadingScreen = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    span{
        font-weight: 400;
        font-size: 25px;
        line-height: 29px;
        text-align: center;
        vertical-align: center;

        color: #ec362d;
    }
`

export const Spinner = styled.div`
    width: 76px;
    height: 76px;
    display: inline-block;
    overflow: hidden;
    background: none;
`

export const Load = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    transform: translateZ(0) scale(0.76);
    backface-visibility: hidden;
    transform-origin: 0 0;

    div{
        position: absolute;
        width: 66px;
        height: 66px;
        border: 10px solid #ec362d;
        border-top-color: transparent;
        border-radius: 50%;
        animation: load 1s linear infinite;
        top: 50px;
        left: 50px
    }

    @keyframes load {
    0% { transform: translate(-50%,-50%) rotate(0deg); }
    100% { transform: translate(-50%,-50%) rotate(360deg); }
}
`
