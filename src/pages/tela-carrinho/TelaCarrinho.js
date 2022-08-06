import React from "react";
import * as C from "./styled"

import Header from './Header_carrinho';
import Footer from '../../components/footer/Footer';
import img_lixeira from './../../assets/img/img_tela_carrinho/lixeira.png';

export default class TelaCarrinho extends React.Component {
  render() {
    let soma = 0;
    const listaCarrinho = this.props.carrinho.map(job => {
      soma = soma + job.preco;
      return (
        <C.Lista>
          <C.Titulo>{`${job.titulo}`}</C.Titulo>
          <C.Preco>{`R$: ${job.preco.toFixed(2)}`}</C.Preco>
          <C.ImagemLixeira onClick={() => this.props.removerItem(job.id)} src={img_lixeira} />
        </C.Lista>
      )
    })
    return (
      <C.Body>

        <Header
          goToTelaInicial={this.props.goToTelaInicial}
          goToTelaServicos={this.props.goToTelaServicos}
        />

        {listaCarrinho.length !== 0 ?
          <C.ConjuntoDoCarrinho>
            <>
              {listaCarrinho}
            </>
            <C.UltimaLinha>
              <C.ValorTotal>Total R$: {soma.toFixed(2)} </C.ValorTotal>
              <C.BotaoContratar onClick={this.props.contratarServico}>Contratar serviços</C.BotaoContratar>
            </C.UltimaLinha>
          </C.ConjuntoDoCarrinho>
          :
          <C.ConjuntoDoCarrinho>
            <C.CarrinhoVazio>Seu carrinho está vazio!</C.CarrinhoVazio>
          </C.ConjuntoDoCarrinho>}

        <Footer />

      </C.Body>
    )
  }
}