import axios from 'axios'
import React, { Component } from 'react'
import { BASE_URL } from "../../constantes/BASE_URL"
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import * as C from "./styled"

export class TelaCadastro extends Component {

  state = {
    jobs: [],
    title: "",
    description: "",
    price: "",
    paymentMethods: [],
    dueDate: "",
    checkCc: false,
    checkCd: false,
    checkP: false,
    checkPp: false,
    checkB: false,
  }

  chamarTitle = (event) => {
    this.setState({ title: event.target.value })
  }
  chamarDescription = (event) => {
    this.setState({ description: event.target.value })
  }
  chamarPrice = (event) => {
    this.setState({ price: event.target.value })
  }

  chamarPaymentMethods = (event) => {
    this.setState({ paymentMethods: [...this.state.paymentMethods, event.target.value] })
    if (event.target.value==="cartao-de-credito") {
      this.setState({checkCc: !this.state.checkCc})
    } else if (event.target.value==="cartao-de-debito") {
      this.setState({checkCd: !this.state.checkCd})
    } else if (event.target.value==="pix") {
      this.setState({checkP: !this.state.checkP})
    } else if (event.target.value==="paypal") {
      this.setState({checkPp: !this.state.checkPp})
    } else if (event.target.value==="boleto") {
      this.setState({checkB: !this.state.checkB})
    }
  }

  chamardueDate = (event) => {
    this.setState({ dueDate: event.target.value })
  }

  criarCadastro = () => {
    const novoJob = {
      title: this.state.title,
      description: this.state.description,
      price: Number(this.state.price),
      paymentMethods: this.state.paymentMethods,
      dueDate: this.state.dueDate
    }

  axios.post(
    `${BASE_URL}/jobs`, novoJob,
    {
      headers: {
        Authorization: "e2190c39-7930-4db4-870b-bed0e5e4b88e"
      }
    }
  ).then((res) => {
      this.setState({ 
        jobs: res.data, 
        title: "" ,
        description: "", 
        price: "", 
        paymentMethods: [], 
        dueDate: "",
        checkCc: false,
        checkCd: false,
        checkP: false,
        checkPp: false,
        checkB: false,
      })
      alert("Servi??o cadastrado com sucesso")
    })
    .catch((erro) => {
      alert("Verifique se os campos est??o preenchidos ou se a data ?? maior que a atual")
    });
  }

  render() {
    return (
      <C.Tudo>

        <Header
        goToTelaInicial={this.props.goToTelaInicial}
        goToTelaCarrinho={this.props.goToTelaCarrinho}
        />

        <C.ParteCentral>
          <C.Card>
            <C.TituloCadastro>Cadastrar servi??o</C.TituloCadastro>

            <C.FacaIsso>T??tulo:</C.FacaIsso>
            <C.Input
              onChange={this.chamarTitle}
              // placeholder="Titulo"
              value={this.state.title}
            >
            </C.Input>

            <C.FacaIsso>Descri????o:</C.FacaIsso>
            <C.Textarea
              onChange={this.chamarDescription}
              // placeholder={"Descri????o"}
              rows="4" 
              value={this.state.description}
            >
            </C.Textarea>

            <C.FacaIsso>Pre??o:</C.FacaIsso>
            
            <C.Input
              type='number'
              onChange={this.chamarPrice}
              // placeholder={"Pre??o"}
              value={this.state.price}
            >
            </C.Input>

            <C.FacaIsso>Validade de servi??o:</C.FacaIsso>
              <C.Data>
                <label for="data-prazo"></label>
                <C.DataInput onChange={this.chamardueDate} type="date"  value={this.state.dueDate} id="data-prazo" name='data-prazo'></C.DataInput>
              </C.Data>
            
            <C.FacaIsso>Modo de pagamento:</C.FacaIsso>
            <C.MetPag action="">
              <C.Met>
                <C.MetInput  checked={this.state.checkCc} value="cartao-de-credito" type='checkbox' onChange={this.chamarPaymentMethods}></C.MetInput>
                <label for="cartao-de-credito">Cart??o de Cr??dito</label>
              </C.Met>

              <C.Met>
                <C.MetInput  checked={this.state.checkCd} value="cartao-de-debito" type='checkbox' onChange={this.chamarPaymentMethods}></C.MetInput>
                <label for="cartao-de-debito">Cart??o de D??bito</label>
              </C.Met>

              <C.Met>
                <C.MetInput checked={this.state.checkP} value="pix" type='checkbox' onChange={this.chamarPaymentMethods}></C.MetInput>
                <label for="pix">Pix</label>
              </C.Met>

              <C.Met>
                <C.MetInput checked={this.state.checkPp} value="paypal" type='checkbox' onChange={this.chamarPaymentMethods}></C.MetInput>
                <label for="paypal">PayPal</label>
              </C.Met>

              <C.Met>
                <C.MetInput  checked={this.state.checkB} value="boleto" type='checkbox' onChange={this.chamarPaymentMethods}></C.MetInput>
                <label for="boleto">Boleto</label>
              </C.Met>
            </C.MetPag>

            <C.Botao type='submit' onClick={this.criarCadastro}>Cadastrar</C.Botao>

          </C.Card>
        </C.ParteCentral>

        <Footer />

      </C.Tudo>
    )
  }
}

export default TelaCadastro