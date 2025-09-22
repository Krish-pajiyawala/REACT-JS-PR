import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserDetail from './Componenet/UserDetail'
import sample from './assets/sample.jpg'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>USER DETAIL</h1>
    
        <UserDetail name="Krish" age={20} from="" img={sample}/>
        
        <UserDetail name="Krish" age={20} from="" img={sample}/>

        <UserDetail name="Krish" age={20} from="" img={sample}/>

        <UserDetail name="Krish" age={20} from="" img={sample}/>

        <UserDetail name="Krish" age={20} from="" img={sample}/>
    </>
  )
}

export default App
