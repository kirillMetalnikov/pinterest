import {combineReducers} from 'redux'
import {
  ADD_CARD
} from '../consts.js'

const initialState = [
  {
    image: 'https://wallbox.ru/wallpapers/main/201628/243951f8099edaa.jpg',
    description: 'image1',
    user: 'test',
    likes: 3

  },
  {
    image: 'https://www.1zoom.ru/big2/98/241039-svetik.jpg',
    description: 'image2',
    user: 'test',
    likes: 2

  },
  {
    image: 'https://f.vividscreen.info/soft/d909de4e4b205ebad5e9f38b0af781d8/Sunset-And-Wheat-Field-1080x960.jpg',
    description: 'image3',
    user: 'test',
    likes: 7

  },
  {
    image: 'https://getbg.net/upload/full/7/285435_pejzazh_vid_krasivo_kartinka_oboi_priroda_1920x1080_(www.GetBg.net).jpg',
    description: 'image4',
    user: 'test1',
    likes: 1

  },
  {
    image: 'https://cdn.fishki.net/upload/post/201507/22/1604768/tn/67.jpg',
    description: 'image5',
    user: 'test1',
    likes: 0

  },
]
const cards = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CARD:
      return action.payload
    default:
      return state
  }
}

export default combineReducers({
  cards
})
