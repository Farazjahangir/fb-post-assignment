import React, { Component } from 'react';
import './App.css';
import Fbpost from './Component/Fbpost/Fbpost'


class App extends Component {
  constructor(){
    super()
    this.state = {
      posts : [
        {
        userAvatar : 'https://mbtskoudsalg.com/images/avatar-png-1.png',    
        userName : "Someone", 
        status : "FB Post Component Assignment FB Post Component Assignment FB Post Component Assignment FB Post Component Assignment FB Post Component Assignment",
        images : [
              'data:image/jpeg;base64,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',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST2IsfCe-q183Z76sbDfJaUclwELVtCVyjip5xjb47nE_vaA-A',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST2IsfCe-q183Z76sbDfJaUclwELVtCVyjip5xjb47nE_vaA-A',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST2IsfCe-q183Z76sbDfJaUclwELVtCVyjip5xjb47nE_vaA-A',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST2IsfCe-q183Z76sbDfJaUclwELVtCVyjip5xjb47nE_vaA-A',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST2IsfCe-q183Z76sbDfJaUclwELVtCVyjip5xjb47nE_vaA-A',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST2IsfCe-q183Z76sbDfJaUclwELVtCVyjip5xjb47nE_vaA-A',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST2IsfCe-q183Z76sbDfJaUclwELVtCVyjip5xjb47nE_vaA-A',
          ],
          likes : "kamran , ali and 39 others", 
          comments : `4Comments`,
          shares : `6Shares`
      },
      {
        userAvatar : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc_ADuzycxsW-OEkOQfXNAR38L9Ehbc40yfmvHz3UYsamtkH1_tQ',    
        userName : "Goku", 
        status : "FB Post Component Assignment FB Post Component Assignment FB Post Component Assignment FB Post Component Assignment FB Post Component Assignment",
        images : [
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqfMjkg_cBXxe55HJ8F0V2zAawBSmZeE9vDO6UrKjiAM9ES7eWgQ',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyA27OXmGmJV83Kq3wU1nTMW_JOAo3DIv-j-ePuNe2qUxlKqYqpA',
            'https://i.pinimg.com/originals/bf/31/1c/bf311c5e294a49557ef0623c93099d94.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp6XkMjo-FHZAeD8UHZ3xVgKz1TzouJzqMyHpA2Hlmq8U9VUXT',
            'http://assets.papelpop.com/wp-content/uploads/2018/06/dragon_ball_super_screenshot_20180119075538_1_original_760x425_cover.jpg'
          ],
          likes : "Faraz , Kashif and 90 others", 
          comments : `12Comments`,
          shares : `60Shares`
      }
    ]
    }
  }
  render() {
    const { posts } = this.state
    return (
      <div>
        <header className="header">
          <h2>Fb Post Component</h2>
        </header>
        <Fbpost postDetails = {posts} />
      </div>
    );
  }
}

export default App;
