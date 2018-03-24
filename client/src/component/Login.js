import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Grid, Segment, Button, Icon } from 'semantic-ui-react'

import {authGoogle, authGithub} from '../actions'
import FullScreenImage from './FullScreenImage'

class Login extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <FullScreenImage top = '15%' left = '0'>
        <Grid centered>
          <Segment padded>
            <h1>Login with: </h1>
            <Button.Group>
              <a href = '/auth/google'><Button color='red'><Icon name='google' />Google</Button></a>
              <Button.Or />
              <a href = '/auth/github'><Button color='blue'><Icon name='github' />github</Button></a>
            </Button.Group>
          </Segment>
        </Grid>
      </FullScreenImage >
    )
  }
}

export default connect()(Login)
