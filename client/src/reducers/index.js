import {combineReducers} from 'redux'
import {
  ADD_CARD,
  GET_CARDS,
  DELETE_CARD,
  LIKE,
  CURRENT_USER,
  USER_LIKE
} from '../consts.js'

const cards = (state = [], action) => {
  switch (action.type) {
    case ADD_CARD:
      return [...state, action.payload]

    case GET_CARDS:
      return action.payload

    case DELETE_CARD:
      return state.filter( card => {
        return card._id != action.payload
      })

    case LIKE:
      return state.map( card => {
        if(card._id == action.payload._id) {
          // response from server without userName!
          var newCard = Object.assign({}, card)
          newCard.likes = action.payload.likes
          return newCard
        }
        return card
      })

    default:
      return state
  }
}

const curentUser = ( state = null, action ) => {
  switch (action.type) {
    case CURRENT_USER:
      return action.payload
    case USER_LIKE:
    var newCard = Object.assign({}, state)
    newCard.like.push(action.payload)
      return newCard
    default:
      return state
  }
}

export default combineReducers({
  cards,
  curentUser
})
