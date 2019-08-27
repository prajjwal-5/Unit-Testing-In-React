import React from 'react';
import Link from './Link';
import { Header } from './component/header';
import { HeadLine } from './component/headline';
import './app.scss';
class App extends React.Component { 
  render() {
    return (
      <div className="App">
        <Header />
        <section className="main-content">
          <HeadLine header="Posts" desc="Click the button to see the posts!"/>
        </section>
        {/* <Link/> */}
      </div>
    )
  }
} 
export default App;