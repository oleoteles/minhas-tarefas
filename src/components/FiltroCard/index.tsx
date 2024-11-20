import { useDispatch, useSelector } from 'react-redux'
import { alterarFiltro } from '../../store/reducers/filtro'
import * as S from './styles'
import { RootReducer } from '../../store'

export type Props = {
  ativo?: boolean
  legenda: string
  criterio:
    | 'favoritos'
    | 'família'
    | 'amigos'
    | 'trabalho'
    | 'urgentes'
    | 'todos'
}

const FiltroCard = ({ legenda, criterio }: Props) => {
  const dispatch = useDispatch()
  const { filtro, contatos } = useSelector((state: RootReducer) => state)

  const verificaEstaAtivo = () => {
    const mesmoCriterio = filtro.criterio === criterio

    return mesmoCriterio
  }

  const filtrar = () => {
    dispatch(
      alterarFiltro({
        criterio
      })
    )
  }

  const ativo = verificaEstaAtivo()

  return (
    <S.Card ativo={ativo} onClick={filtrar}>
      <S.Label>{legenda}</S.Label>
    </S.Card>
  )
}

export default FiltroCard
