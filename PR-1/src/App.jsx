import './App.css'
import UserDetail from './Componenet/UserDetail'
import sample from './assets/1.jpg'
import sample2 from './assets/2.jpg'
import sample3 from './assets/3.jpg'
import sample4 from './assets/4.jpg'
import sample5 from './assets/5.jpg'
import sample6 from './assets/6.jpg'
function App() {

  return (
    <>
    <h1>USER DETAIL</h1>
    
        <div className='colum'>

        <UserDetail name="Krish" age={20} from="Surat" img={sample} dob="23/07/2006"/>
        
        <UserDetail name="Meet" age={20} from="Ahmedavad" img={sample2} dob="10/09/10"/>

        <UserDetail name="Nayan" age={20} from="Mahesana" img={sample3} dob="15/10/15"/>

        <UserDetail name="Luv" age={20} from="Bhavnagar" img={sample4} dob="22/09/22"/>

        <UserDetail name="Darshik" age={20} from="Jamnagar" img={sample5} dob="10/07/2002"/>

        <UserDetail name="User" age={20} from="Code" img={sample6} dob="15/06/15"/>

        </div>
    </>
  )
}

export default App
