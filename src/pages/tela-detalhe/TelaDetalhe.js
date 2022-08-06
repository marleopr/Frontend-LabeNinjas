import React, { Component } from 'react'
import {
  Body, Container, Titulo, Buttons, Formulario, ButtonAdicionar, ButtonBack,
  ConteudoAddCarrinho, ImagemAddCarrinho, TextoAddCarrinho, ConteudoVoltar,
  ImagemSetaEsquerda, TextoVoltar, Prazo, MetPag, Descricao, Metodo, Aceita
} from './styled'
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import add_carrinho from './../../assets/img/img_tela_detalhe/adicionar_ao_carrinho.png';
import seta_esquerda from './../../assets/img/img_tela_detalhe/seta_esquerda.png';

export default class Teladetalhes extends Component {

  render() {
    return (
      <Body>

        <Header
          goToTelaInicial={this.props.goToTelaInicial}
          goToTelaCarrinho={this.props.goToTelaCarrinho}
        />

        <Container>
          <Formulario>
            <Titulo>{this.props.servicoDetalhado.title}</Titulo>

            <MetPag>
              <Aceita>Aceita:</Aceita>
              {this.props.servicoDetalhado.paymentMethods.map((met, ind) => {
                return <Metodo>
                  {this.props.servicoDetalhado.paymentMethods[ind]}
                </Metodo>
              })}
            </MetPag>

            <Prazo>{`Até ${this.props.servicoDetalhado.dueDate.split('T')[0]} por`} <strong>{`R$ ${this.props.servicoDetalhado.price}`}</strong></Prazo>

            <Descricao>{this.props.servicoDetalhado.description}</Descricao>

            <Buttons>
              <ButtonAdicionar>
                <ConteudoAddCarrinho>
                  <ImagemAddCarrinho src={add_carrinho} />
                  <TextoAddCarrinho
                    onClick={() => this.props.atualizaCarrinho(this.props.servicoDetalhado.id, this.props.servicoDetalhado.title, this.props.servicoDetalhado.price)
                    }>ADICIONAR AO CARRINHO</TextoAddCarrinho>
                </ConteudoAddCarrinho>
              </ButtonAdicionar>
              <ButtonBack>
                <ConteudoVoltar onClick={this.props.goToTelaServicos}>
                  <ImagemSetaEsquerda src={seta_esquerda} />
                  <TextoVoltar>VOLTAR</TextoVoltar>
                </ConteudoVoltar>
              </ButtonBack>
            </Buttons>

          </Formulario>
        </Container>

        <Footer />

      </Body>
    )
  }
}
