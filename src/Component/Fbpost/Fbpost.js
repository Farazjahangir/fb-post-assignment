import React, { Component } from 'react'
import './Fbpost.css'
import FbImageLibrary from 'react-fb-image-grid'
import FacebookEmoji from 'react-facebook-emoji';
import likeLogo from '../../images/like.png'
import commentLogo from '../../images/comment.png'
import shareLogo from '../../images/share.png'


class Fbpost extends Component {
    constructor(props){
        super()
        console.log(props);
        this.state = {
            flag : false
        }
        this.like = this.like.bind(this)
    }

    like(){
        const { flag } = this.state
        if(!flag){
            this.setState({flag : true})
        }
        else{
            this.setState({flag : false})
        }
    }
  render() {
      const { postDetails } = this.props
      const { flag } = this.state
    return (
      <div className="my-5">
            {
                postDetails.map((value)=>{
                    console.log(value.userAvatar);                      
                    return <div className="my-8">
                                <div className="my-4 mx-4">
                                    <div className="flex align-center"> 
                                        <img src={value.userAvatar} width="65px" height="65px" className="flex-1"/>
                                        <p className="flex-2 marg-left font-1">{value.userName}</p>
                                    </div>
                                    <p className="my-7" style={{width: "70%"}}>{value.status}</p> 
                                </div>
                                <div style={{position : "relative"}}>
                                    <FbImageLibrary images={value.images} width={"70"} align ={"left"}/> 
                                </div>
                                <div className="flex2">
                                    <div className="mx-4">
                                        <FacebookEmoji type="like" size="xxs"/>
                                        <FacebookEmoji type="love" size="xxs"/>
                                        <FacebookEmoji type="wow" size="xxs"/>          
                                        {flag ? `you , ${value.likes}` :value.likes}
                                    </div>
                                    <div className="flex mx-5">
                                        <p className="mx-3">{value.comments}</p>
                                        <p>{value.shares}</p>
                                    </div>
                                </div>
                                <div className="flex2 mx-3 border-custom">
                                    <span className={flag ? "btn-border liked" : "btn-border"} onClick={this.like}>
                                        <img src={likeLogo} width="30px" className="pad-1"/>Like
                                    </span>
                                    <span className="btn-border">
                                        <img src={commentLogo} width="30px" className="pad-1" />Comment
                                    </span>
                                    <span className="btn-border">
                                        <img src={shareLogo} width="30px"  className="pad-1"/>Share
                                    </span>
                                </div>
                            </div>
                })
            }
      </div>
    )
  }
}

export default Fbpost