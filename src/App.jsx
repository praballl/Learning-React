import { useState } from 'react'
import './App.css'

function App() {
  const [colour, setColour] = useState("white")


  return (
    <div className = "h-screen w-full"
    style={{backgroundColor: colour}}
    >
    <div className="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0  max-w-full delay-200 justify-center py-3 bg-red-50 rounded-lg w-auto"
    >
      <button
        type="button"
        className="rounded-full bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        onClick={function(){setColour("black")}}
      >
        Black
      </button>
      <button
        type="button"
        className="rounded-full bg-yellow-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
        onClick={function(){setColour("yellow")}}
      >
        Yellow
      </button>
      <button
        type="button"
        className="rounded-full bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
        onClick={function(){setColour("red")}}
      >
        red
      </button>
      <button
        type="button"
        className="rounded-full bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 
        focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
        onClick={function(){setColour("green")}}
        
      >
        green
      </button>
    </div>
    </div>

  );
}

export default App
