import React, { Component } from 'react'
import styled from 'styled-components'


  
export class ListaDeMensagens extends Component {

  render() {
    const List = styled.ul`
    background-color: red;
    list-style-type: none;
   `;

    const Mensagens = [
      {nome: "Eliz", mensagem: "olá"},
      {nome: "Breno", mensagem: "hi"}
    ]
    return (
      <List>
        {Mensagens.map(mensagem =>
          {return(
            <div>
              <strong> {mensagem.nome} </strong>
              <li> {mensagem.mensagem} </li>
            </div>
          )})}
      </List>

    )
    
  }
  
}



