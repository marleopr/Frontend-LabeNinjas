import styled from "styled-components";

export const Body = styled.div`
  display: grid;
  grid-template-rows: 60px 80px 80px 1fr 60px;
  /* min-width: 100vw; */
  min-width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  @media screen and (max-device-width : 480px){
  display: flex;
  flex-direction: column;
  align-items: center;
  }
`

export const SectionBuscar = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const BuscaNome = styled.input`
  height: 40px;
  width: 300px;
  font-size: 22px;
  padding: 0 0 0 10px;
  border: solid 1px rgb(188,188,194);
  border-radius: 10px;
  background-color: rgb(219,214,238);
  &:focus {
    border: solid 1px #8878c7;
    outline: 0;
  }
  @media screen and (max-device-width : 480px){
    margin: 10px;
  }
`

export const DivFiltros = styled.div`
  display:flex;
  justify-content: center;
  align-items:center;
  @media screen and (max-device-width : 480px){
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 0 10px 0;
  }
`

export const SectionFiltro = styled.section`
  display: flex;
  justify-content: center;
  margin: 0;
  @media screen and (max-device-width : 480px){
    max-width: 100vw;
    flex-direction: column;
    align-items: center;
  }
`

export const FieldsetInput = styled.fieldset`
  font-size: 18px;
  width: 250px;
  margin: 0 20px 0 0;
  border:solid 1px rgb(188,188,194);
  border-radius: 10px;
  @media screen and (max-device-width : 480px){
    width: 280px;
  }
`

export const Cifrao = styled.div`
  display: flex;
  align-items: center; 
  height: 30px;
  font-size: 22px;
`

export const CampoInput = styled.input`
  background-color: rgb(219,214,238);
  height: 30px;
  font-size: 22px;
  width: 245px;
  border-radius: 50;
  border: none;
  outline:0;
`

export const SelectOrdenar = styled.select`
  background: rgb(219,214,238);
  height: 35px;
  width: 245px;
  border: none;
  font-size: 18px;
  @media screen and (max-device-width : 480px){
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const OptionOrdenar = styled.option`
  border: 0;
  font-size: 18px;
`

export const Lista = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 20px;
  row-gap: 20px;
  margin: 20px 20px;
  box-sizing: border-box;
  @media screen and (max-device-width : 480px){
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  }
`

export const Legend = styled.legend`
  font-size: 16px;
`