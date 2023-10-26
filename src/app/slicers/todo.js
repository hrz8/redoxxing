import { createSlice } from '@reduxjs/toolkit'

const todoSlicer = createSlice({
    name: 'todo',
    initialState: {
        activities: [
            {
                id: 1,
                title: 'Belanja Sayuran',
                isCompleted: false,
            },
            {
                id: 2,
                title: 'Cuci Motor',
                isCompleted: false,
            },
            {
                id: 3,
                title: 'Isi Galon',
                isCompleted: false,
            },
            {
                id: 4,
                title: 'Cuci Mobik',
                isCompleted: false,
            }
        ]
    },
    reducers: {
        add: (state, data) => {
            const idTerakhir = state.activities[state.activities.length - 1].id
            state.activities.push({
                id: idTerakhir + 1,
                title: data.payload.title,
                isCompleted: false
            })
            // state.value = state.value + data.payload.penambahan
        }
    }
})

export const { add } = todoSlicer.actions

export default todoSlicer.reducer


