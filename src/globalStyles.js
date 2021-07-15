import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Source Sans Pro', sans-serif;
}
`

export const Container = styled.div`
	width: 100%;
	z-index: 1;
	max-width: 1300px;
	padding: 0 50px;
	margin: 0 auto;

	@media screen and (max-width: 991px) {
		padding: 0 30px;
	}
`
