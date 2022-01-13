import styled from "styled-components";

export const NoQuizzes = styled.div`
    height: 181px;
    text-align: center;
    padding: 33px 0;
    width: 100%;
    margin-bottom: 77px;

    border: 1px dashed #d5d5d5;
    border-radius: 5px;

    display: flex;
    flex-direction: column;
    align-items: center;

    h2{
        height: 107px;
        width: 250px;

        font-size: 20px;
        line-height: 23px;

        color: #b9b9b9;
    }

    button{
        border: 1px dashed #ec362d;
        border-radius: 50px;

        height: 59px;
        width: 150px;

        font-size: 21px;
        background: 0;

        color: #ec362d;
        cursor: pointer;
    }
`
export const YourQuizzesContainer = styled.div`
    margin-bottom: 48px;

    button{
        margin-left: 17px;
    border-radius: 50%;
    border: 0;
    background: 0;
    color: #ec362d;
    font-size: 40px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    }

    h2{
        font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    }
    ul{
        display: flex;
    gap: 15px;
    flex-wrap: wrap;
    }
    li{
        list-style: none;
    cursor: pointer;
    position: relative;
    width: 340px;
    height: 180px;
    background-size: cover;
    border-radius: 5px;
    }
`
export const AddQuizz = styled.div`
    display: flex;
    margin-bottom: 12px;
    button{
        margin-left: 17px;
        border-radius: 50%;
        border: 0;
        background: 0;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        
    }
`