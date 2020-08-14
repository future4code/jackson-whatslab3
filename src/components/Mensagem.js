import React, {Component} from 'react'
import styled from 'styled-components'

const StyledMessage = styled.div`
  background-color: #dcf8c6;
  align-self: ${props => {
    if (props.usuario.toLowerCase() === 'eu') {
      return 'flex-end'
    } else {
      return 'flex-start'
    }
  }};
  border-radius: 10px;
  padding: 10px;
  box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.5);
  margin-bottom: 10px;
`

export class Mensagem extends Component {
  render() {
    return (
    <StyledMessage onDoubleClick={() => { this.props.onDeleteMensagem(this.props.id) }} usuario={this.props.usuario}>
      <strong> {this.props.usuario} </strong>
      <p> {this.props.conteudo} </p>
    </StyledMessage>

    )
  }
}