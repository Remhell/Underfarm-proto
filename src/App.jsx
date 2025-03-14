import { useState } from 'react'
import './App.css'
let vacio = '';

function App() {
  const open_close_menu = () => {
    let menu_dropdown = document.getElementById('menu');
    let button_close=document.getElementById('x');
    menu_dropdown.classList.toggle('open_menu');
    button_close.classList.toggle('put_x');
    
    }

  return (
    <>
    <header>
      <div className='bars'>
        <button onClick={open_close_menu} className = 'menu_button' id='x'></button>
      </div>
      <nav id='menu' className='dropdown'>
        <ul>
          <li><a href={vacio}>Dark mode</a></li>
          <li><a href={vacio}>Helpers</a></li>
          <li><a href={vacio}>Settings</a></li>
          <li><a href={vacio}>Account</a></li>
        </ul>
      </nav>
    </header>
     <h1>UnderFarm</h1>
    </>
  )
}

export default App
