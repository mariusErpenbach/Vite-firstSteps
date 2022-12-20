import { useState } from 'react'
import reactLogo from './assets/react.svg'
import exampleImage from './assets/jeans-heart.jpg'

function App() {

const [puzzlePic, setpuzzlePic] = useState(exampleImage)


const detectField = () => {
  let myBox = document.getElementById("puzzleBox")
  console.log(myBox.offsetWidth)
}

  return (
    <div className="App">
    <div id="puzzleBox">
     <img src={puzzlePic} alt="your puzzle"/>
     </div>
     <button onClick={detectField}> detect Field</button>
    </div>
  )
}

export default App
