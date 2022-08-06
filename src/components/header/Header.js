import React, { Component } from 'react';
import {Header, ParteEsquerda, NomeLogo, ImagemLogo, ImagemCarrinho} from './styled_header'
import img_logo from './../../assets/img/img_header/header_logo.png';
import img_carrinho from './../../assets/img/img_header/header_carrinho.png';

export default class Header_ extends Component {
  render() {
    return(
      <Header>
        <ParteEsquerda>
          <ImagemLogo onClick={this.props.goToTelaInicial} src={img_logo} />
          <NomeLogo onClick={this.props.goToTelaInicial}>LabeNinjas</NomeLogo>
        </ParteEsquerda>

        <ImagemCarrinho onClick={this.props.goToTelaCarrinho} src={img_carrinho} />
      </Header>
    )
  }
}