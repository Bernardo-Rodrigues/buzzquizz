import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	*{
        margin:0;
        padding:0;
		box-sizing:border-box;
		font-family: 'Roboto', sans-serif;
	}
	body {
		background-color: #fafafa;
		display: flex;
		flex-direction: column;
		align-items:center;

		overflow-x: hidden;

		margin-top: 64px;
	}

    a{
		text-decoration: none;
	}
`

export const Container = styled.div`
 	width: 1050px;
    padding: 80px 0 250px;

    display: flex;
    flex-direction: column;
    align-items: center;
`