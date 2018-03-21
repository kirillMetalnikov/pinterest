import React, {Component} from 'react'

class Card extends Component {
  constructor(props) {
    super(props)
  }

  hundleDelete(id) {
    return () => this.props.deleteCard(id)
  }


  hundleLike(id) {
    return () =>   this.props.like(id)
  }

  render() {
    var {src, description, user, likes, id, type} = this.props
    return (
      <div>
        {type == 'image' ? <img src = {src} /> : <iframe src = {src}  frameborder="0" allow="autoplay; encrypted-media" allowfullscreen = {false}/>}
        <div>{description}</div>
        <div>{user}</div>
        <div
          style ={{backgroundColor: 'yellow'}}
          onClick = {this.hundleLike.bind(this)(id)}
        >
          {likes}
        </div>
        <div>{id}</div>
        <button onClick={this.hundleDelete.bind(this)(id)}>Delete</button>
      </div>
    )
  }
}

export default Card
