import {
  ADD_CARD,
  DELETE_CARD,
  LIKE
} from '../consts.js'

var id = 6
export const addCard = (image, description, user) => dispatch => {
  id++
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


export const getCurrentUser = () => dispatch => {
  console.log('getCurentUser')
}

export const logout = () => dispatch => {
  console.log('logout')
}

export const login = () => dispatch => {
  console.log('login')
}
