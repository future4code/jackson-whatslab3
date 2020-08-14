import React, { Component } from 'react'
import styled from 'styled-components'

import sendIcon from '../img/send.svg';

const StyledForm = styled.form`
  display: flex;
  width: 100%;
`

const StyledInput = styled.input`
  flex-grow: ${props => {
  if (props.inputField === "usuario") {
      return 1
    } else if (props.inputField === "mensagem") {
      return 4
    }
  }};
  
  height: 40px;
  width: 0px;
  margin: 0px 5px;
  padding: 0 10px;

  border: 1px solid transparent;
  border-radius: 20px;
  outline: none;

  box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.5);
  :focus {
    border: 1px solid #128c7e
  }
`

const StyledButton = styled.button`
  cursor: pointer;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  height: 40px;
  width: 40px;
  background-color: #075e54;
  border: none;
  border-radius: 50%;
  outline: none;
  margin: 0px 5px;

  box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.5);;
`

export class Formulario extends Component {
  render() {
    return (
      <StyledForm onSubmit={this.props.onSendMessage}>
        <StyledInput
          type="text"
          value={this.props.usuarioValue}
          onChange={this.props.onChangeUsuario}
          inputField="usuario"
          placeholder="Usuário"
          required
        />
        
        <StyledInput
          type="text"
          value={this.props.mensagemValue}
          onChange={this.props.onChangeMensagem}
          inputField="mensagem"
          placeholder="Mensagem"
          required
        />
        
        <StyledButton type="submit">
          <img src={sendIcon} alt="send"/>
        </StyledButton>
      </StyledForm>
    )
  }
}