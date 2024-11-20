import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import FiltroCard from '../../components/FiltroCard'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'

import * as S from './styles'
import { Botao, Campo } from '../../styles'

type Props = {
  mostrarFiltros: boolean
}

const BarraLateral = ({ mostrarFiltros }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        {mostrarFiltros ? (
          <>
            <Campo
              type="text"
              placeholder="Buscar"
              value={termo}
              onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
            />
            <S.Filtros>
              <FiltroCard criterio="favoritos" legenda="favoritos" />
              <FiltroCard criterio="família" legenda="família" />
              <FiltroCard criterio="amigos" legenda="amigos" />
              <FiltroCard criterio="trabalho" legenda="trabalho" />
              <FiltroCard criterio="urgentes" legenda="urgentes" />
              <FiltroCard criterio="todos" legenda="todos" />
            </S.Filtros>
          </>
        ) : (
          <Botao onClick={() => navigate('/')}>
            Voltar à agenda de contatos
          </Botao>
        )}
      </div>
    </S.Aside>
  )
}

export default BarraLateral
