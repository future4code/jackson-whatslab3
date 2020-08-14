import React, { Component } from 'react';
import styled from 'styled-components';

import { ListaDeMensagens } from './components/ListaDeMensagens'
import { Formulario } from './components/Formulario'

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 90vh;
  margin: 5vh 25vw;
  padding: 20px;

  background-color: #ece5dd;
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
`

class App extends Component {
  state = {
    mensagens: [],
    mensagemInput: '',
    usuarioInput: ''
  }

  handleChangeMensagem = (event) => {
    this.setState({
      mensagemInput: event.target.value
    })
  }
  
  handleChangeUsuario = (event) => {
    this.setState({
      usuarioInput: event.target.value
    })
  }

  enviarMensagem = (event) => {
    event.preventDefault()

    const mensagens = [...this.state.mensagens, { 
      id: Date.now(),
      usuario: this.state.usuarioInput,
      conteudo: this.state.mensagemInput,
    }]

    console.log(mensagens)
    
    this.setState({
      mensagens: mensagens,
      mensagemInput: '' })
  }
  
  
  render() {
    return (
    <StyledApp>
      <ListaDeMensagens />
      <Formulario
        mensagemValue={this.state.mensagemInput}
        usuarioValue={this.state.usuarioInput}
        onChangeMensagem={this.handleChangeMensagem}
        onChangeUsuario={this.handleChangeUsuario}
        onSendMessage={this.enviarMensagem}
      />
    </StyledApp>
  );}
}

export default App;
