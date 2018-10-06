import React, { Component } from 'react'
import logo from '../../images/avatar.png' 
class Fbpost extends Component {
    constructor(props){
        super()
        console.log(props);
        
    }
  render() {
      const { postDetails } = this.props
    return (
      <div>
           <div>
                {
                    postDetails.map((value)=>{
                        console.log(value.userAvatar);
                        
                        return <div>
                            <img src={value.userAvatar} />
                            <img src={logo} />
                        </div>
                    })
                }
            </div> 
      </div>
    )
  }
}

export default Fbpost