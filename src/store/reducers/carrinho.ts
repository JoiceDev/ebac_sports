import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type CarrinhoState = {
  itens: Produto[]
}

const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    //construir parte de mudança do estado
    adicionar: (state, action: PayloadAction<Produto>) => {
      const item = action.payload //recebe o produto na função

      if (state.itens.find((produto) => produto.id === item.id)) {
        alert('Item já adicionado!')
      } else {
        state.itens.push(item)
      }
    }
  }
})

export const { adicionar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
