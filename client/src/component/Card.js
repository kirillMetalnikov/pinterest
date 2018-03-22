import React, {Component} from 'react'

import history from '../history'

class Card extends Component {
  constructor(props) {
    super(props)
  }

  hundleDelete(_id) {
    return () => this.props.deleteCard(_id)
  }


  hundleLike(_id) {
    return () =>   this.props.like(_id)
  }

  hundleUser(ownerID) {
    return () => {console.log(ownerID); history.push('/user/' + ownerID)}
  }

  render() {
    var {src, description, likes, _id, type, ownerID, ownerName} = this.props
    return (
      <div>
        {type == 'image' ? <img src = {src} /> : <iframe src = {src}  frameborder="0" allow="autoplay; encrypted-media" allowfullscreen = {false}/>}
        <div>{description}</div>
        <div
          onClick = {this.hundleUser.bind(this)(ownerID)}
        >
          {ownerName}
        </div>
        <div
          style ={{backgroundColor: 'yellow'}}
          onClick = {this.hundleLike.bind(this)(_id)}
        >
          {likes}
        </div>
        <div>{_id}</div>
        <button onClick={this.hundleDelete.bind(this)(_id)}>Delete</button>
      </div>
    )
  }
}

export default Card
