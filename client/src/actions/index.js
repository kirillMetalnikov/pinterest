import {
  ADD_CARD,
  DELETE_CARD
} from '../consts.js'


export const addCard = (id, image, description, user) => dispatch => {
  var card = {
    id,
    image: 'https://ic.pics.livejournal.com/narkom/4470119/425477/425477_1000.jpg',
    description: 'add test description',
    user: 'add test user',
    likes: 0
  }

  dispatch({type: ADD_CARD, payload: card})
}

export const deleteCard = (id) => dispatch => {
  console.log(id)
  dispatch({type: DELETE_CARD, payload: id})
}
