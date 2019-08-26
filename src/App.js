import React from 'react';
import Link from './Link';
import { Header } from './component/header';
import './app.scss';
class App extends React.Component { 
  render() {
    return (
      <div className="App">
        <Header />
        {/* <Link/> */}
      </div>
    )
  }
} 
export default App;