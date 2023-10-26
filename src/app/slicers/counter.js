import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
        // siapa: 'aku',
        // age: 19
    },
    reducers: {
        increment: (state, data) => {
            state.value = state.value + data.payload.penambahan
        },
        penambahan1: (state) => {
            state.value = state.value + 1
        },
        penambahan9: (state) => {
            state.value = state.value + 9
        }
    }
})

export const { increment, penambahan1, penambahan9 } = counterSlice.actions

export default counterSlice.reducer


