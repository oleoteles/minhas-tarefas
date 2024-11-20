import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatosSlice = {
  itens: Contato[]
}

const initialState: ContatosSlice = {
  itens: [
    {
      id: 1,
      nome: 'José Teles',
      email: 'jlinsteles@gmail.com',
      numero: '(81) 9999-8888'
    },
    {
      id: 2,
      nome: 'Pedro Silva',
      email: 'peupc@gmail.com',
      numero: '(81) 9997-2838'
    },
    {
      id: 3,
      nome: 'Lucas Campello',
      email: 'lucasdalmata@gmail.com',
      numero: '(81) 9988-7777'
    },
    {
      id: 4,
      nome: 'Ricardo Cacau',
      email: 'ricardosmaia@gmail.com',
      numero: '(81) 9655-8877'
    }
  ]
}

const contatoSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((contato) => contato.id !== action.payload)
      ]
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )
      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const contatoJaExiste = state.itens.find(
        (tarefa) =>
          tarefa.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )

      if (contatoJaExiste) {
        alert('Já existe um contato com esse nome')
      } else {
        const ultimoContato = state.itens[state.itens.length - 1]

        const contatoNovo = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }
        state.itens.push(contatoNovo)
      }
    }
  }
})

export const { remover, editar, cadastrar } = contatoSlice.actions

export default contatoSlice.reducer
