import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Grid, Form, Input, Button, Radio, Segment} from 'semantic-ui-react'

import {addCard} from '../actions'

class FormAdd extends Component {
  constructor(props) {
    super(props)
    this.state = {link: '', type: 'image', description: ''}
  }

  hundleAdd(e) {
    e.preventDefault()
    var {link, type, description} = this.state

    if(this.state.type == 'video') {
      if(link.indexOf('youtube.com') == -1) {
        this.setState({link: '', description: ''})
        return
      }
      link = link.replace('youtube.com/watch?v=', 'youtube.com/embed/')
    }

    this.props.addCard(link, type, description)
    this.setState({link: '', type: 'image', description: ''})
  }

  hundleLinkInput(e) {
    var link = e.target.value
    this.setState({link})
  }

  hundleDescInput(e) {
    this.setState({description: e.target.value})
  }

  hundleRadioInput(e, {value}) {
    this.setState({link: '', description: '', type: value})
  }

  render() {
    var {link, type, description} = this.state
    return (
      <div style ={{margin: '5% 0'}}>
        <Segment padded>
          <Grid stackable padded columns={2}>
            <Grid.Column>
              <div className = 'imagePreview'>
                {link
                  ? type == 'image'
                    ? <img src = {link}/>
                    : link.indexOf('youtube.com') != -1
                      ? <iframe src = {link.replace('youtube.com/watch?v=', 'youtube.com/embed/')}  frameborder="0" />
                      : <div><h2>Error:</h2><h3>Link need youtube only!</h3></div>
                  : null
                }
              </div>
            </Grid.Column>
            <Grid.Column>
              <h3>Add link to image or to video</h3>
              <Form>
                <Form.Field required>
                  <label>Link: </label>
                  <Input onChange = {this.hundleLinkInput.bind(this)} value = {link} placeholder = 'https://bal-bla-bla.bla'/>
                </Form.Field>
                <Form.Field>
                  <label>Description: </label>
                  <Input onChange = {this.hundleDescInput.bind(this)} value = {description} placeholder = 'bla-bla-bla'/>
                </Form.Field>
                <Form.Group inline>
                  <label>Type: </label>
                  <Form.Field control={Radio} label='Image'  value = 'image' checked={type === 'image'} onChange = {this.hundleRadioInput.bind(this)} />
                  <Form.Field control={Radio} label='Yutube' value = 'video' checked={type === 'video'} onChange = {this.hundleRadioInput.bind(this)} />
                </Form.Group>
                <Button onClick={this.hundleAdd.bind(this)} floated='right'  basic color='blue'>Add</Button>
              </Form>
            </Grid.Column>
          </Grid>
        </Segment>
      </div>
    )
  }
}

export default connect(null, {addCard})(FormAdd)
