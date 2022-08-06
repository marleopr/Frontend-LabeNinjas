import styled from "styled-components";

export const Body = styled.div`
  display: grid;
  grid-template-rows: 60px 1fr 60px;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  box-shadow: 0.5px 0.5px 3px gray;
`

export const Lista = styled.div`
  vertical-align: middle;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 700px;
  margin: 20px;
  border-radius: 5px;
  background-color: #b7aedd;
  box-shadow: 0.5px 0.5px 3px gray;
  @media screen and (max-device-width : 480px){
  width: 90%;
  margin: 5px;
  }
`

export const Titulo = styled.p`
  font-size: 20px;
  margin: 0 0 0 10px;
  flex-basis: 77%;
`

export const Preco = styled.p`
  font-size: 20px;
  flex-basis: 20%;
`

export const ImagemLixeira = styled.img`
  width: 25px;
  height: 25px;
  margin: 0 10px 0 0;
  padding: 10px;
  flex-basis: 3%;

  &:hover {
    transition: background-color 1s;
    background-color: #cfc9e8;
    cursor: pointer;
    border-radius: 50%;
    margin: 0 10px 0 0;
    padding: 10px;
  }
`

export const ConjuntoDoCarrinho = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  @media screen and (max-device-width : 480px){
  width: 100%;
  padding-left: 0;
}
`

export const ConjuntoDeItens = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  p{
      margin: 10px 0px;
  }
`

export const Carrinho = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  p{
      margin: 10px 0px;
  }
`

export const UltimaLinha = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 700px;
  @media screen and (max-device-width : 480px){
  width: 90%;
  }
`

export const ValorTotal = styled.p`
  font-size: 26px;
`

export const BotaoContratar = styled.button`
  font-size: 18px;
  height: 40px;
  width: 200px;
  color: white;
  border: none;
  border-radius: 5px;
  background-color: #8878c7;
  &:hover {
    background-color: #6d5cad;
    cursor: pointer;
  }
`

export const CarrinhoVazio = styled.p`
  text-align: center;
  color: #8878c7;
  font-size: 50px;
`
