import styled from "styled-components";

export const HeaderElement = styled.header`
    position: fixed;
    top: 0;
    z-index: 2;

    width: 100%;
    height: 69px;
    background: #ec362d;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    text-align: center;
    color: #fff;

    padding: 13px 0;

    h1{
        cursor: pointer;
        font-weight: bold;
    }
`