import styled from "styled-components";

export const Container = styled.div`
    margin-top:140px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;

    h2{
        margin-bottom: 40px;
    }

    
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;

    padding: 20px;
    width: 600px;

    background-color: #fff;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);

    button{
        background: #EC362D;
    border-radius: 15px;
    border: 0;

    height: 54px;
    padding: 0 40px;
    margin-top: 80px;

    font-size: 21px;
    color: #FFF5F4;
    }

    ::placeholder{
        font-size: 19px;
    font-style: italic;
    color: #BABABA;
    }

    h3{
        font-size: 16px;
    color: #EC362D;
    font-weight: normal;
    margin-top: 3px;
    }
`
export const Input = styled.input`
    width: 100%;
    height: 46px;
    padding-left: 23px;

    ${({error}) => error && "background: #FFE9E9;"}

    border: 1px solid #D1D1D1;
    border-radius: 5px;
    outline: 0;

    color: #BABABA;
`