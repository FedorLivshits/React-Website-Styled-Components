import styled, {createGlobalStyle} from 'styled-components'

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

export const Button = styled.button`
  border-radius: 4px;
  background: ${({primary}) => (primary ? '#4B59F7' : '#0467FB')};
  white-space: nowrap;
  padding: ${({big}) => (big ? '12px 64px' : '10px 20px')};
  color: #fff;
  font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  &:hover {
    transition: all 0.3s ease-out;
    background-color: ${({primary}) => (primary ? '#0467FB' : '#4B59F7')};
  } 
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`