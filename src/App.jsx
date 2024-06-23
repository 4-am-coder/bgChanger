import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("White")
  const [textColor, setTextColor]= useState("White");
  function btnClick(colorValue){
    if (colorValue === "Cyan" || colorValue === "White"){
      setTextColor("Black");
    } else {
      setTextColor("White");
    }
    setColor(colorValue);
  }

  return (
    <>
      <div className='main-container' style={{backgroundColor: color, color: textColor}}>This is a Background Color Changer!
      </div>
      <div className="btn-container">
        <button onClick={()=> btnClick("Red")} style={{backgroundColor: "Red", color: "white"}}>Red</button>
        <button onClick={()=> btnClick("Green")} style={{backgroundColor: "Green", color: "White"}}>Green</button>
        <button onClick={()=> btnClick("Blue")} style={{backgroundColor: "Blue", color: "white"}}>Blue</button>
        <button onClick={()=> btnClick("Purple")} style={{backgroundColor: "Purple", color: "white"}}>Purple</button>
        <button onClick={()=> btnClick("Cyan")} style={{backgroundColor: "Cyan", color: "Black"}}>Cyan</button>
        <button onClick={()=> btnClick("Black")} style={{backgroundColor: "Black", color: "white"}}>Black</button>
        <button onClick={()=> btnClick("Olive")} style={{backgroundColor: "Olive", color: "white"}}>Olive</button>
        <button onClick={()=> btnClick("White")} style={{backgroundColor: "White", color: "Black"}}>White</button>
      </div>
    </>
  )
}

export default App
