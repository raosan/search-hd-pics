import { combineReducers } from 'redux'
import picsReducer from './picsReducer'

const selectedPicReducer = (selectedPic = null, action) => {
  switch(action.type) {
  	case 'PIC_SELECTED':
  		return action.payload
  	default:
  		return selectedPic
  }
}

export default combineReducers({
  pics: picsReducer,
  selectedPic: selectedPicReducer
})