import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { BotaoSalvar } from '../../styles'
import * as S from './styles'

import { remover, editar } from '../../store/reducers/contatos'
import ContatoClass from '../../models/Contato'

type Props = ContatoClass

const Contato = ({
  numero: numeroOriginal,
  email: emailOriginal,
  nome: nomeOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [numero, setNumero] = useState('')

  useEffect(() => {
    if (nomeOriginal.length > 0) {
      setNome(nomeOriginal)
      setEmail(emailOriginal)
      setNumero(numeroOriginal)
    }
  }, [nomeOriginal, emailOriginal, numeroOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    setNome(nomeOriginal)
    setEmail(emailOriginal)
    setNumero(numeroOriginal)
  }

  return (
    <S.Card>
      <S.NomeContato
        disabled={!estaEditando}
        type="text"
        name="nome"
        value={nome}
        onChange={(evento) => setNome(evento.target.value)}
      ></S.NomeContato>
      <S.EmailContato
        disabled={!estaEditando}
        type="text"
        name="email"
        value={email}
        onChange={(evento) => setEmail(evento.target.value)}
      ></S.EmailContato>
      <S.NumeroContato
        disabled={!estaEditando}
        type="text"
        name="número"
        value={numero}
        onChange={(evento) => setNumero(evento.target.value)}
      ></S.NumeroContato>
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    numero,
                    email,
                    nome,
                    id
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </BotaoSalvar>
            <S.BotaoCancelarRemover onClick={cancelarEdicao}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Contato
