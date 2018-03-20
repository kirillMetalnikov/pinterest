import {
  ADD_CARD,
  DELETE_CARD,
  LIKE
} from '../consts.js'


export const addCard = (id, image, description, user) => dispatch => {
  var card = {
    id,
    image,
    description: 'add test description',
    user: 'add test user',
    likes: 0
  }

  dispatch({type: ADD_CARD, payload: card})
}

export const deleteCard = (id) => dispatch => {
  dispatch({type: DELETE_CARD, payload: id})
}

export const like = id => dispatch => {
  dispatch({type: LIKE, payload: id})
}
