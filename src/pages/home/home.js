import React from "react";
import TelaInicial from "../tela-inicial/TelaInicial";
import TelaServicos from "../tela-servicos/TelaServicos";
import TelaDetalhe from "../tela-detalhe/TelaDetalhe";
import TelaCarrinho from "../tela-carrinho/TelaCarrinho";
import TelaCadastro from "../tela-cadastro/TelaCadastro"
import axios from "axios";
import { BASE_URL } from "../../constantes/BASE_URL";

export default class Home extends React.Component {
  state = {
    paginaAtual: "tela-inicial",
    listaJobs: [],
    carrinho: [],
    servicoDetalhado: {}
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.carrinho === prevState.carrinho) return;

    localStorage.setItem('carrinho', JSON.stringify(this.state.carrinho))
  };

  componentDidMount() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho'));

    if (!carrinho) return;
    this.setState({carrinho});
  };

  contratarServico = () => {
    alert('Obrigado(a) por contratar os serviços');
  }

  atualizaCarrinho = (id, titulo, preco) => {
    let repetido = false;
    for (let i=0 ; i<this.state.carrinho.length ; i++) {
      if (this.state.carrinho[i].id === id) {
        repetido = true;
        break;
      }
    }

    if (!repetido) {
      const novoProduto = {
        id: id,
        titulo: titulo,
        preco: preco
      }
      const novoCarrinho = [...this.state.carrinho, novoProduto]
      this.setState({carrinho: novoCarrinho})
      alert('Item adicionado ao carrinho.')
    } else {
      alert('O item selecionado já está no carrinho.')
    }
  }

  removerItem = (id) => {
    const novoCarrinho = this.state.carrinho.filter( job => {
      return job.id !== id
    })
    this.setState({carrinho: novoCarrinho})
  }

  pegaJobs = () =>{
    axios.get(`${BASE_URL}/jobs`, 
      {
        headers: {
          Authorization: "e2190c39-7930-4db4-870b-bed0e5e4b88e"
        }
    })
    .then((res)=>{
      this.setState({listaJobs: res.data.jobs})
    })
    .catch((erro)=>{
      alert('Ocorreu um erro ao carregar os serviços')
    })
  }

  detalharJob = (id) =>{
    axios.get(`${BASE_URL}/jobs/${id}`, 
      {
        headers: {
          Authorization: "e2190c39-7930-4db4-870b-bed0e5e4b88e"
        }
    })
    .then((res)=>{
      this.setState({servicoDetalhado: res.data, paginaAtual: "tela-detalhe"})
    })
    .catch((erro)=>{
      alert('Ocorreu um erro ao carregar os dados do serviço selecionado')
    })
  }
  
  procuraPagina = () => {
    switch (this.state.paginaAtual) {
      case "tela-inicial":
        return <TelaInicial
          goToTelaCadastro={this.goToTelaCadastro}
          goToTelaServicos={this.goToTelaServicos}
          goToTelaCarrinho={this.goToTelaCarrinho}
        />

      case "tela-cadastro":
        return <TelaCadastro
          goToTelaInicial={this.goToTelaInicial}
          goToTelaCarrinho={this.goToTelaCarrinho}
        />

      case "tela-servicos":
        return <TelaServicos
          goToTelaInicial={this.goToTelaInicial}
          goToTelaCarrinho={this.goToTelaCarrinho}
          goToTelaDetalhe={this.goToTelaDetalhe}
          listaJobs={this.state.listaJobs}
          detalharJob={this.detalharJob}
          atualizaCarrinho={this.atualizaCarrinho}
        />

      case "tela-detalhe":
        return <TelaDetalhe
          goToTelaInicial={this.goToTelaInicial}
          goToTelaCarrinho={this.goToTelaCarrinho}
          goToTelaServicos={this.goToTelaServicos}
          servicoDetalhado={this.state.servicoDetalhado}
          atualizaCarrinho={this.atualizaCarrinho}
        />

      case "tela-carrinho":
        return <TelaCarrinho 
          goToTelaInicial={this.goToTelaInicial}
          goToTelaServicos={this.goToTelaServicos}
          carrinho={this.state.carrinho}
          removerItem={this.removerItem}
          contratarServico={this.contratarServico}
        />

      default:
        return "Erro ao Encontrar pagina"

    }
  }

  goToTelaInicial = () => {
    this.setState({ paginaAtual: "tela-inicial" })
  }

  goToTelaCadastro = () => {
    this.setState({ paginaAtual: "tela-cadastro" })
  }

  goToTelaServicos = () => {
    this.setState({ paginaAtual: "tela-servicos" })
    this.pegaJobs()
  }

  goToTelaDetalhe = () => {
    this.setState({ paginaAtual: "tela-detalhe"})
  }

  goToTelaCarrinho = () => {
    this.setState({ paginaAtual: "tela-carrinho" })
  }

  render() {
    return (
      <div>
        {this.procuraPagina()}
      </div>
    );
  }
}