import React from 'react';

//Components
import Header from './Components/Header'
import Body from './Components/Body';
import Footer from './Components/Footer';


class App extends React.Component {

  render(){
    return(
      <div className='root'>
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App