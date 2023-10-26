import Heading from './components/Heading'
import InputTodo from './components/InputTodo'
import Filters from './components/Filters'
import Activities from './components/Activities'
import { useDispatch } from 'react-redux'
import { penambahan9 } from './app/slicers/counter'

function App() {
  // const [counter, setCounter] = useState(0)
  // const counter = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
      <Heading />
      <InputTodo />

      <button onClick={() => {
        dispatch(penambahan9())
      }}>Klik saya</button>
      
      <Filters />

      <Activities />
    </>
  )
}

export default App
