import { createSlice } from '@reduxjs/toolkit'

export const PasteSlice = createSlice({
  name: 'paste',
  initialState: {
    value: 0
  },
  reducers: {
    addToPaste: state => {

    },
    updateToPaste: state => {
      
    },
    reset: (state, action) => {
    state.value += action.payload
    }
  }
})


export const { addToPaste, updateToPaste, reset } = PasteSlice.actions

export default PasteSlice.reducer