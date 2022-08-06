import React, { Component } from 'react';
import {Header, ImagemLogo, NomeLogo} from './styled_header'
import img_logo from './../../assets/img/img_header/header_logo.png';


export default class HeaderInicial extends Component {


  render() {
    return(
      <Header>
        <ImagemLogo onClick={this.props.goToTelaInicial} src={img_logo} />
        <NomeLogo onClick={this.props.goToTelaInicial}>LabeNinjas</NomeLogo>
        
      </Header>
    )
  }
}