import React, { Component } from 'react'
import './Fbpost.css'

class Fbpost extends Component {
    constructor(props){
        super()
        console.log(props);
        
    }
  render() {
      const { postDetails } = this.props
    return (
      <div className="my-5">
            {
                postDetails.map((value)=>{
                    console.log(value.userAvatar);                      
                    return <div>
                                <div className="center-content my-4">
                                    <div className="flex"> 
                                        <img src={value.userAvatar} width="40px" height="40px" className="flex-1"/>
                                        <p className="flex-2 marg-left">{value.userName}</p>
                                    </div>
                                    <p className="my-2 mx-6">{value.status}</p> 
                                </div>      
                                {value.images}                              
                            </div>
                })
            }
      </div>
    )
  }
}

export default Fbpost