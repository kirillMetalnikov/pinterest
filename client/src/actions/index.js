import axios from 'axios'

import {
  ADD_CARD,
  GET_CARDS,
  DELETE_CARD,
  LIKE
} from '../consts.js'


var id = 6
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
  axios.put(`/api/cards/${_id}`)
    .then( res => {
      dispatch({type: LIKE, payload: res.data.card})
    })
}


export const getCurrentUser = () => dispatch => {
  console.log('getCurentUser')
}

export const logout = () => dispatch => {
  console.log('logout')
}

export const login = () => dispatch => {
  console.log('login')
}
