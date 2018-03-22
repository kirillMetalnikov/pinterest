import {combineReducers} from 'redux'
import {
  ADD_CARD,
  GET_CARDS,
  DELETE_CARD,
  LIKE
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
          return action.payload
        }
        return card
      })

    default:
      return state
  }
}

export default combineReducers({
  cards
})
