import { useSelector } from "react-redux"

function Heading() {
    const counter = useSelector((state) => state.counter.value)
    
    return (
        <>
            <h1>{counter}Whats the plan for today?</h1>
        </>
    )
}

export default Heading
