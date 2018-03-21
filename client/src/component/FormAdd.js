import React, {Component} from 'react'
import {connect} from 'react-redux'

import {addCard} from '../actions'

class FormAdd extends Component {
  constructor(props) {
    super(props)
    this.state = {link: '', type: 'image', description: ''}
  }

  hundleAdd(e) {
    e.preventDefault()
    var {link, type, description} = this.state
    console.log(link, type, description)
    if(type == 'video') {
      if(link.indexOf('youtube.com') == -1) {
        console.log('Error: Need youtube only')
        return
      }
      link = link.replace('youtube.com/watch?v=', 'youtube.com/embed/')
    }
    console.log(link, type, description)
    this.props.addCard(link, type, description)
    this.setState({link: ''})
  }

  hundleLinkInput(e) {
    this.setState({link: e.target.value})
  }

  hundleDescInput(e) {
    this.setState({description: e.target.value})
  }

  hundleRadioInput(e) {
    this.setState({type: e.target.value})
  }

  render() {
    return (
      <form>
        <input type = 'text' onChange = {this.hundleLinkInput.bind(this)} value = {this.state.link} placeholder = 'input link'/>
        <input type = 'text' onChange = {this.hundleDescInput.bind(this)} value = {this.state.description}  placeholder = 'description'/>
        <label>
          <input type = 'radio' value = 'image' checked={this.state.type == 'image'} onChange = {this.hundleRadioInput.bind(this)} />
          Image
        </label>
        <label>
          <input type = 'radio' value = 'video' checked={this.state.type == 'video'}  onChange = {this.hundleRadioInput.bind(this)} />
          Youtube
        </label>
        <button onClick={this.hundleAdd.bind(this)}>Add</button>
      </form>
    )
  }
}

export default connect(null, {addCard})(FormAdd)
