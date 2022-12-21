import { useState } from 'react'
import reactLogo from './assets/react.svg'
import exampleImage from './assets/jeans-heart.jpg'

function App() {

const [puzzlePic, setpuzzlePic] = useState(exampleImage)



const addRoster = () => {
  let myBox = document.getElementById("puzzleBox")
  console.log("width of my element is: " + myBox.offsetWidth)
console.log("height of my element is " + myBox.offsetHeight)
}

  return (
    <div className="App">
    <div id="puzzleBox">
     <img src={puzzlePic} alt="your puzzle"/>
     </div>
     <button onClick={addRoster}> detect Field</button>
    </div>
  )
}

export default App
