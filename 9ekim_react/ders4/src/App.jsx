import { useRef } from 'react'
import './App.css'
import DarkModeButton from './Components/DarkModeButton'
import Personels from './Components/Personels'
import Cards from './Components/Cards'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  
const rootDiv = useRef()

  return (
    <>
     
     <div className="container" ref={rootDiv}>


      <DarkModeButton div = {rootDiv}></DarkModeButton>

        <div className="site-container">

          <h1>Article</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <br /><br /><br /><b></b>
        <Personels></Personels>
      </div>
<br /><br /><br /><br /><br /><br /><br /><br /><br />

      <Cards url="/img/indir (1).jpeg" bilgi="buraya gittin mi"></Cards>
      <Cards info="burası güzel bir yer"></Cards>
      <Cards></Cards>
      



    </>
  )
}

export default App
