import { useSelector } from 'react-redux'
import Contato from '../../components/Contato'
import { MainContainer } from '../../styles'

import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  const filtraContatos = () => {
    if (termo) {
      return itens.filter(
        (item) => item.nome.toLowerCase().search(termo?.toLowerCase()) >= 0
      )
    } else {
      return itens
    }
  }

  const contatos = filtraContatos()

  return (
    <MainContainer>
      <p>
        {contatos.length} contato(s) encontrados como: &quot;{termo}&ldquo;{' '}
      </p>
      <ul>
        {contatos.map((c) => (
          <li key={c.nome}>
            <Contato
              id={c.id}
              numero={c.numero}
              email={c.email}
              nome={c.nome}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ListaDeContatos
