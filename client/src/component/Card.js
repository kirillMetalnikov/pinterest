import React, {Component} from 'react'
import {connect} from 'react-redux'
import history from '../history'

import {deleteCard, like} from '../actions'

class Card extends Component {
  constructor(props) {
    super(props)
  }

  hundleDelete(_id) {
    return () => this.props.deleteCard(_id)
  }


  hundleLike(_id, ownerID) {
    return () =>  {
      var {curentUser} = this.props
      if (curentUser
        && curentUser._id && curentUser._id != ownerID
        && curentUser.like && curentUser.like.indexOf(_id) == -1
      ){
        console.log(curentUser)
        console.log(ownerID)
        this.props.like(_id)
      }
    }
  }

  hundleUser(ownerID) {
    return () => {history.push('/user/' + ownerID)}
  }


  render() {
    var {src, description, likes, _id, type, ownerID, ownerName, curentUser} = this.props
    return (
      <div>
        {type == 'image' ? <img src = {src} /> : <iframe src = {src}  frameborder="0" />}
        <div>{description}</div>
        <div
          onClick = {this.hundleUser.bind(this)(ownerID)}
        >
          {ownerName}
        </div>
        <div
          style ={{backgroundColor: 'yellow'}}
          onClick = {this.hundleLike.bind(this)(_id, ownerID)}
        >
          {likes}
        </div>
        {ownerID == curentUser && curentUser._id
          ? <button onClick={this.hundleDelete.bind(this)(_id, ownerID)}>Delete</button>
          : null
        }
      </div>
    )
  }
}

const mapStateToProps = ({curentUser}) => {
  return {curentUser}
}
export default connect(mapStateToProps, {deleteCard, like})(Card)
