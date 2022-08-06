import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0.5px 0.5px 3px gray;
  text-align: center;
  padding: 5px;
  border-radius: 5px;
  background-color: #c3bbe3;
  @media screen and (max-device-width : 480px){
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`
export const Titulo = styled.p`
  font-size: 28px;
  color: #8878c7;
  margin: 10px 0px;
`
export const Prazo = styled.p`
  margin: 5px 0px 10px 0px;
  font-size: 18px;
`
export const LinhaBaixo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Botao = styled.button`
  align-items: center;
  width: 150px;
  border: none;
  color: #8878c7;
  font-size: 14px;
  height: 25px;
  cursor: pointer;
  margin: 30px 0 20px 10px;
  background-color: #c3bbe3;
	&:hover {
		cursor: pointer;
		background-color: #b7aedd;
	} 
`
export const ImagemCarrinho = styled.img`
  width: 30px;
  height: 30px;
  margin: 0 25px 0 0;
  padding: 10px;
  &:hover {
		cursor: pointer;
    border-radius: 30%;
		background-color: #b7aedd;
	}
`