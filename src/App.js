import React, { Component } from 'react';
import './App.css';
import Fbpost from './Component/Fbpost/Fbpost'

class App extends Component {
  constructor(){
    super()
    this.state = {
      posts : [{
        userAvatar : 'https://mbtskoudsalg.com/explore/avatar-png/#gal_post_3289_avatar-png-1.png'     
      }]
    }
  }
  render() {
    const { posts } = this.state
    return (
      <div>
        <Fbpost postDetails = {posts} />
      </div>
    );
  }
}

export default App;
