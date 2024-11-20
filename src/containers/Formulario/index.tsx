import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { BotaoSalvar, MainContainer, Titulo } from '../../styles'
import { Form, NovoContato } from './styles'

import { cadastrar } from '../../store/reducers/contatos'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [numero, setNumero] = useState('')

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      cadastrar({
        nome,
        email,
        numero
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <Titulo>Novo contato</Titulo>
      <Form onSubmit={cadastrarContato}>
        <NovoContato
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          type="text"
          name="nome"
          placeholder="Nome"
        />
        <NovoContato
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
          type="text"
          name="email"
          placeholder="E-mail"
        />
        <NovoContato
          value={numero}
          onChange={(evento) => setNumero(evento.target.value)}
          type="text"
          name="numero"
          placeholder="Número"
        />
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </Form>
    </MainContainer>
  )
}

export default Formulario
