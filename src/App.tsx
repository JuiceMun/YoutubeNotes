//import { useState } from 'react'

import './App.css'

function App() {

  
  const openSidePanel = () => {
    console.log("Sending message to open side panel");
    chrome.runtime.sendMessage("open-side-panel");
  };

  return (
    <>
      <button onClick = {openSidePanel}>Open Side Tab</button> 
    </>
  )
}

export default App
