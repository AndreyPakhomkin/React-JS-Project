import React from 'react';
import "./Header.css"

function Header() {
  return(
        <div className='header'> {/*Основной контейнер flexbox*/}
          <div>
            <button className='loginButton' disabled={true}>login</button>
          </div>

          <div className='workTitle'>
            <h1>procrastiAction</h1>
          </div>
          
          <div>
            <button className='historyButton' disabled={true}>history</button>
          </div>
        </div>  
  )
}

export default Header