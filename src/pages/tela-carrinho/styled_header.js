import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  grid-column: 1/-1;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
  background-color: #8878c7;
`

export const ImagemLogo = styled.img`
  width: 30px;
  margin: 0px 0px 0px 20px;
  &:hover{
    cursor:pointer;
  }
`

export const ParteEsquerda = styled.div`
  display: flex;
  align-items: center;
`

export const NomeLogo = styled.h2 `
  color: #dbd6ee;
  margin-left: 8px;
  &:hover{
    cursor:pointer;
  }
`

export const ImagemVoltar = styled.img`
  width: 30px;
  margin: 0px 20px 0px 0px;
  &:hover{
    cursor:pointer;
  }
`