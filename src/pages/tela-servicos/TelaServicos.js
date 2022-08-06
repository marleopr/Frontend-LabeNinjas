import React, { Component } from 'react'
import { Body, DivFiltros, SectionBuscar, BuscaNome, CampoInput, SelectOrdenar, OptionOrdenar, Lista, SectionFiltro, Legend, FieldsetInput, Cifrao } from "./styled"
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Card from './../../components/card_servicos/Card'

export default class TelaServicos extends Component {

  state = {
    precoMinimo: "",
    precoMaximo: "",
    buscaNome: "",
    ordenacao: "titulo",
  }

  onPrecoMinimo = (event) => {
    this.setState({ precoMinimo: event.target.value })
  }

  onPrecoMaximo = (event) => {
    this.setState({ precoMaximo: event.target.value })
  }

  onBuscaNome = (event) => {
    this.setState({ buscaNome: event.target.value })
  }

  atualizaOrdenacao = (event) => {
    this.setState({ ordenacao: event.target.value })
  }

  render() {
    return (

      <Body>

        <Header
          goToTelaInicial={this.props.goToTelaInicial}
          goToTelaCarrinho={this.props.goToTelaCarrinho}
        />

        <SectionBuscar>
          <BuscaNome
            type="text"
            onChange={this.onBuscaNome}
            value={this.state.buscaNome}
            placeholder="Buscar"
          />
        </SectionBuscar>

        <DivFiltros>
          <SectionFiltro>

            <FieldsetInput>
              <Legend>Ordenar por:</Legend>
              <SelectOrdenar
                name="sort"
                value={this.state.ordenacao}
                onChange={this.atualizaOrdenacao}
              >
                <OptionOrdenar value={"precoCre"}>Preço Crescente</OptionOrdenar>
                <OptionOrdenar value={"precoDec"}>Preço Decrescente</OptionOrdenar>
                <OptionOrdenar value={"titulo"}>Título</OptionOrdenar>
                <OptionOrdenar value={"prazo"}>Prazo</OptionOrdenar>
              </SelectOrdenar>
            </FieldsetInput>

            <FieldsetInput>
              <Legend>Valor Mínimo</Legend>
              <Cifrao>
                <p>R$</p>
                <CampoInput
                  type="number"
                  onChange={this.onPrecoMinimo}
                  value={this.state.precoMinimo}
                />
              </Cifrao>
            </FieldsetInput>

            <FieldsetInput>
              <Legend>Valor Máximo</Legend>
              <Cifrao>
                <p>R$</p>
                <CampoInput
                  type="number"
                  onChange={this.onPrecoMaximo}
                  value={this.state.precoMaximo}
                />
              </Cifrao>
            </FieldsetInput>

          </SectionFiltro>

        </DivFiltros>

        <Lista>
          {this.props.listaJobs.filter( job => {
            return this.state.precoMinimo === "" || job.price >= this.state.precoMinimo
          }).filter( job => {
            return this.state.precoMaximo === "" || job.price <= this.state.precoMaximo
          }).filter( job => {
            return job.title.toLowerCase().includes(this.state.buscaNome.toLowerCase())
          }).sort((trabalhoAtual, trabalhoProximo) => {
            if (this.state.ordenacao === "precoCre") {
              return (1) * (trabalhoAtual.price - trabalhoProximo.price)
            } else if (this.state.ordenacao === "precoDec") {
              return (-1) * (trabalhoAtual.price - trabalhoProximo.price)
            } else if (this.state.ordenacao === "prazo") {
              return (1) * (new Date(trabalhoAtual.dueDate).getTime() - new Date(trabalhoProximo.dueDate).getTime())
            } else {
              return (1) * trabalhoAtual.title.localeCompare(trabalhoProximo.title)
            }
          }).map((job, indice) => {
            return (
              <Card key={indice}
                titulo={job.title}
                descricao={job.description}
                preco={job.price}
                data={job.dueDate}
                id={job.id}

                detalharJob={this.props.detalharJob}
                atualizaCarrinho={this.props.atualizaCarrinho}
              />
            )

          })
          }
        </Lista>

        <Footer />

      </Body >
    )
  }
}