import { combineReducers } from 'redux'

const picsReducer = () => {
  return []
}

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