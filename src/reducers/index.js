import { combineReducers } from 'redux'
import picsReducer from './picsReducer'

const selectedPicReducer = (selectedPic = null, action) => {
  if(action.type === 'PIC_SELECTED') {
    return action.payload
  }

  return selectedPic
}

export default combineReducers({
  pics: picsReducer,
  selectedPic: selectedPicReducer
})