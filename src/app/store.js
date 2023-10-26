import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slicers/counter'
import todoReducer from './slicers/todo'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        todo: todoReducer,
    },
})
