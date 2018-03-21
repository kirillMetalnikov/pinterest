import React, {Component} from 'react'

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

  render() {
    var {src, description, user, likes, _id, type} = this.props
    return (
      <div>
        {type == 'image' ? <img src = {src} /> : <iframe src = {src}  frameborder="0" allow="autoplay; encrypted-media" allowfullscreen = {false}/>}
        <div>{description}</div>
        <div>{user}</div>
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
