import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Card, Icon, Image, Button, Label, Popup } from 'semantic-ui-react'

import history from '../history'
import {deleteCard, like} from '../actions'

class CardItem extends Component {
  constructor(props) {
    super(props)
  }

  hundleDelete(_id) {
    return () => this.props.deleteCard(_id)
  }

  canLike(_id, ownerID) {
    var {curentUser} = this.props
    return (curentUser
      && curentUser._id && curentUser._id != ownerID
      && curentUser.like && curentUser.like.indexOf(_id) == -1
    )
  }
  hundleLike(_id, ownerID) {
    return () =>  {
      var {curentUser} = this.props
      if (this.canLike(_id, ownerID)){
        this.props.like(_id)
      }
    }
  }

  hundleUser(ownerID) {
    return () => {
      history.push('/user/' + ownerID)
    }
  }

  render() {
    var {src, description, likes, _id, type, ownerID, ownerName, curentUser} = this.props
    return (
      <Card centered>
        {type == 'image' ? <img src = {src} /> : <iframe src = {src}  frameborder="0" />}
        <Card.Content>
          <Card.Header onClick = {this.hundleUser.bind(this)(ownerID)} textAlign = 'center'>
            {ownerName}
          </Card.Header>
          <Card.Description>
            {description}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Popup
            flowing
            hoverable
            trigger={
              <Button as='div' labelPosition='right' onClick = {this.hundleLike.bind(this)(_id, ownerID)}>
                <Button icon color='blue' disabled = {!this.canLike.bind(this)(_id, ownerID)}>
                  <Icon name='like outline' />
                  Like
                </Button>
                <Label as='a' basic color='blue' pointing='left'>{likes}</Label>
              </Button>
            }
            content={
              curentUser
                ? curentUser._id == ownerID
                  ? <span>{"You can't like to your card"}</span>
                  : curentUser.like.indexOf(_id) == -1
                    ? <span>Click to like</span>
                    : <span>{"You're alredy liked"}</span>
                : <span>You need <a href = '/login'>login</a></span>
            }
          />
          {ownerID == (curentUser && curentUser._id)
            ? <Button floated='right' onClick={this.hundleDelete.bind(this)(_id, ownerID)} basic color= 'blue'>Delete</Button>
            : null
          }
        </Card.Content>
      </Card>
    )
  }
}

const mapStateToProps = ({curentUser}) => {
  return {curentUser}
}
export default connect(mapStateToProps, {deleteCard, like})(CardItem)
