// import { useState } from "react"

import { useDispatch, useSelector } from "react-redux"
import { penambahan1 } from "../app/slicers/counter"


function InputTodo() {
    const counter = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <>
            <div> angka {counter}</div>
            <div style={{marginBottom: '30px'}}>
                <input type="text" placeholder="What to do" />
                <button type="submit" onClick={() => {
                    dispatch(penambahan1())
                }}>Buat test</button>
                <button type="submit" onClick={() => {
                    // dispatch(penambahan1())
                }}>Add</button>
            </div>
        </>
    )
}

export default InputTodo
