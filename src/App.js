import React from 'react';
import Link from './component/Link';
import { Header } from './component/header';
import { HeadLine } from './component/headline';
import Button from './component/button';
import ListItem from './component/listItem';
import { connect } from "react-redux";
import { fetchPosts } from './actions/index';

import './app.scss';

const users = [{
  fName: "Prajjwal",
  lName: "Singh",
  email: "pra@gamil.com",
  age: 22,
  onlineStatus: true
}]

class App extends React.Component { 

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = () => {
    this.props.fetchPostsAction();
  }

  render() {
    const configButton = {
      buttonText: 'Get Posts',
      emitEvent: this.handleSubmit
    }

    const { posts } = this.props;

    return (
      <div className="App">
        <Header />
        <section className="main-content">
          <HeadLine header="Posts" desc="Click the button to see the posts!" users={users}/>
          <Button { ...configButton }/>
          {posts.length > 0 && 
          <div>
            {posts.map((post, index) => {
              const {title, body} = post;
              const configListItem = {
                title,
                desc: body,
              }
              return <ListItem key={index} {...configListItem} />;
          })}
          </div>}
        </section>
       
        {/* <Link/> */}
      </div>
    )
  }
}

const mapStateToProps = (state) => {

  return {
    posts: state.posts
  }
}

const mapDispatchToProps = (dispatch) => {

  return {
    fetchPostsAction: () => {
      dispatch(fetchPosts());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);