import styled from "styled-components"

export const Tudo = styled.div`
  display: grid;
  grid-template-rows: 60px 1fr 60px;
  width: 100vw;
  height: 100vh;
`
export const ParteCentral = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Card = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 5px 5px 0 rgba(0,0,0,0.2), 0 10px 20px 0 rgba(0,0,0,0.19);
  background-color: #9f93d2;
  @media screen and (max-device-width : 480px){
  width: 90%;
  }
`
export const TituloCadastro = styled.p`
  font-size: 30px;
  color: white;
  margin: 10px;
`
export const Input = styled.input`
  width: 90%;
  height: 30px;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  margin: 0 0 10px 0;
  padding: 0 0 0 5px;
  background-color: #e7e4f3;
  &:focus {
    border: solid 2px #6f59c5;
    outline: 0;
  }
`
export const Textarea = styled.textarea`
  font-family: sans-serif;
  font-size: 18px;
  width: 90%;
  height: 75px;
  margin: 0 0 10px 0;
  padding: 5px 0 0 5px;
  border: none;
  border-radius: 5px;
  background-color: #e7e4f3;
  &:focus {
    border: solid 2px #6f59c5;
    outline: 0;
  }
`
export const FacaIsso = styled.p`
  width: 90%;
  margin: 0 0 5px 0;
  color: white;
`
export const Data = styled.form`
  width: 90%;
  margin: 0px;
  text-align: center;
`
export const DataInput = styled.input`
  font-size: 16px;
  width: 100%;
  height: 30px;
  margin: 0 0 20px 0;
  padding: 0 0 0 5px;
  box-sizing: border-box;
  background-color: #e7e4f3;
  border: none;
  border-radius: 5px;
  &:focus {
    border: solid 2px #6f59c5;
    outline: 0;
  }
`
export const MetPag = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90%;
`
export const Met = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  width: 90%;
`
export const MetInput = styled.input`
  margin: 0 5px 0 0;
  width: 15px;
  height: 15px;
  border: solid 1px blue;
`
export const Botao = styled.button`
  width: 90%;
  height: 40px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  margin: 20px 0px 20px 0px;
  font-size: 20px;
  color: #f3f1f9;
  background-color: #8878c7;
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    transition: all 0.2s;
    background: #bdb2e7;
  }
`