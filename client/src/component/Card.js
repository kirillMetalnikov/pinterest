import React, {Component} from 'react'

class Card extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    var {image, description, user, likes, id, hundleLike, hundleDelete} = this.props
    console.log(image, description, user, likes, id)
    return (
      <div key = {id} className = 'grid-item'>
        <img src = {image} />
        <div>{description}</div>
        <div>{user}</div>
        <div
          style ={{backgroundColor: 'yellow'}}
          onClick = {hundleLike(id)}
        >
          {likes}
        </div>
        <div>{id}</div>
        <button onClick={hundleDelete(id)}>Delete</button>
      </div>
    )
  }
}

export default Card
