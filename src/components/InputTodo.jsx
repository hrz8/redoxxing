// import { useState } from "react"

import { useDispatch, useSelector } from "react-redux"
import { penambahan1 } from "../app/slicers/counter"
import { add } from "../app/slicers/todo"
import { useState } from "react"


function InputTodo() {
    const counter = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    const [inputan, setInputan] = useState('')

    return (
        <>
            <div> angka {counter}</div>
            <div style={{marginBottom: '30px'}}>
                <input type="text" placeholder="What to do" value={inputan} onChange={(event) => {
                    event.preventDefault()
                    setInputan(event.target.value)
                }} />
                <button type="submit" onClick={() => {
                    dispatch(penambahan1())
                }}>Buat test</button>
                <button type="submit" onClick={() => {
                    // console.log(inputan)
                    dispatch(add({title: inputan}))
                }}>Add</button>
            </div>
        </>
    )
}

export default InputTodo
