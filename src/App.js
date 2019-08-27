import React from 'react';
import Link from './Link';
import { Header } from './component/header';
import { HeadLine } from './component/headline';
import './app.scss';

const users = [{
  fName: "Prajjwal",
  lName: "Singh",
  email: "pra@gamil.com",
  age: 22,
  onlineStatus: true
}]

class App extends React.Component { 
  render() {
    return (
      <div className="App">
        <Header />
        <section className="main-content">
          <HeadLine header="Posts" desc="Click the button to see the posts!" users={users}/>
        </section>
        {/* <Link/> */}
      </div>
    )
  }
} 
export default App;