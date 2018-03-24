import axios from 'axios'
import history from '../history'

import {
  ADD_CARD,
  GET_CARDS,
  DELETE_CARD,
  LIKE,
  CURRENT_USER,
  USER_LIKE
} from '../consts.js'

export const addCard = (src, type, description) => dispatch => {
  axios.post('/api/cards', {card: {src, type, description}})
    .then( res => {
      var {card} = res.data
      if (card) {
        dispatch({type: ADD_CARD, payload: card})
      }
    })

}
export const getCards = () => dispatch => {
  axios.get('/api/cards')
    .then( res => {
      var {cards} = res.data
      if(cards) {
        dispatch({type: GET_CARDS, payload: cards})
      }
    })
}

export const deleteCard = (_id) => dispatch => {
  axios.delete(`/api/cards/${_id}`)
    .then( res => {
      dispatch({type: DELETE_CARD, payload: res.data._id})
    })

}

export const like = _id => dispatch => {
  //USER_LIKE and LIKE are diferences because:
  //  LIKE get new data from server
  //    (other users can like the card and it will be beatiful if we see new count of likes)
  //  USER_LIKE need quick dispatch store to user can't click twice or more on button 'like'
  //    data from backend come with latency)
  dispatch({type: USER_LIKE, payload: _id})
  axios.put(`/api/cards/${_id}`)
    .then( res => {
      dispatch({type: LIKE, payload: res.data.card})
    })
}


export const getCurrentUser = () => dispatch => {
  axios.get('/api/user')
    .then( res => {
      if(res.data._id) {
        dispatch({type: CURRENT_USER, payload: res.data})
      }
    })
}

export const logout = () => dispatch => {
  axios.get('/auth/logout')
    .then(res => {
      dispatch({type: CURRENT_USER, payload: res.data.user})
      history.push('/')
    })
}
