import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  label {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  }
`

export const NomeContato = styled.input`
  font-size: 18px;
  font-weight: bold;
  margin-left: 8px;
  margin-bottom: 4px;
`

export const EmailContato = styled.input`
  font-size: 18px;
  font-weight: bold;
  margin-left: 8px;
  margin-bottom: 4px;
`

export const NumeroContato = styled.input`
  font-size: 18px;
  font-weight: bold;
  margin-left: 8px;
  margin-bottom: 4px;
`

export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

export const Botao = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: #2f3640;
  border-radius: 8px;
  margin-right: 8px;
`

export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
