import React, { Component } from 'react'
import styled from 'styled-components'

import { Mensagem } from './Mensagem'
  
const List = styled.div`
  list-style-type: none;
  width: 100%;

  display: flex;
  flex-direction: column;
`;

export class ListaDeMensagens extends Component {

  render() {
    return (
      <List>
        {this.props.mensagens.map(mensagem =>
          {return(
            <Mensagem key={mensagem.id} id={mensagem.id} usuario={mensagem.usuario} conteudo={mensagem.conteudo} onDeleteMensagem={this.props.onDeleteMessage}/>
          )})}
      </List>
    )
  }
}



