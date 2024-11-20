import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type FiltroState = {
  termo?: string
  criterio:
    | 'favoritos'
    | 'família'
    | 'amigos'
    | 'trabalho'
    | 'urgentes'
    | 'todos'
}

const initialState: FiltroState = {
  termo: '',
  criterio: 'todos'
}

const filtroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    alterarTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    },
    alterarFiltro: (state, action: PayloadAction<FiltroState>) => {
      state.criterio = action.payload.criterio
    }
  }
})

export const { alterarTermo, alterarFiltro } = filtroSlice.actions

export default filtroSlice.reducer
