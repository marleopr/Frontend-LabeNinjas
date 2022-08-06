import React, { Component } from 'react'
import { Card, Titulo, Prazo, LinhaBaixo, Botao, ImagemCarrinho} from "./styled"

import img_add_carrinho from './../../assets/img/img_card/adicionar_ao_carrinho.png';

export default class TelaServicos extends Component {
  render() {
    return (
      <Card>
      <Titulo>{this.props.titulo}</Titulo>
      <Prazo> {`Até ${this.props.data.split('T')[0]} por`} <strong>{`R$ ${this.props.preco}` }</strong> </Prazo>
      <LinhaBaixo>
        <Botao onClick={()=>this.props.detalharJob(this.props.id)}>VER DETALHES</Botao>
        <ImagemCarrinho onClick={()=>this.props.atualizaCarrinho(this.props.id, this.props.titulo, this.props.preco)} src={img_add_carrinho}/>
      </LinhaBaixo>
      </Card>
    )
  }
}
