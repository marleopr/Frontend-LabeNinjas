import React, { Component } from 'react'
import HeaderInicial from './HeaderInicial'
import Imagem from "../../assets/img/img_tela_inicial/monitoramento.png"
import * as C from "./styled"

export default class TelaInicial extends Component {

  state = {
    goToTelaCarrinho: this.props.goToTelaCarrinho
  }

  render() {
    return (
      <>
        <HeaderInicial />
        <C.Body>

          <C.Container>

            <C.ContainerTexto>
              <C.Titulo>Ofereça seus serviços ou contrate os melhores profissionais</C.Titulo>
              <p>Aqui na LabeNinjas, temos a melhor plataforma de serviços online para você - freelancer ou autônomo. Para quem está procurando um profissional, saiba que o nosso indice de aprovação entre consumidores é de 95%.</p>
              <C.ButtonsDiv>
                <C.Button onClick={this.props.goToTelaServicos}>Contratar</C.Button>
                <C.Button onClick={this.props.goToTelaCadastro}>Cadastrar </C.Button>
              </C.ButtonsDiv>

            </C.ContainerTexto>

            <C.ContainerImagem src={Imagem} />

          </C.Container>

        </C.Body>
      </>
    )
  }
}