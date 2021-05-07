import { combineReducers } from 'redux'
import jobReducer from './jobReducer'
import jobsReducer from './jobsReducer'
import authReducer from './authReducer'
import locationsReducer from './locationsReducer'
import visitorReducer from './visitorReducer'
import skillsReducer from './skillsReducer'

const rootReducer = combineReducers({
  jobs: jobsReducer,
  job: jobReducer,
  locations: locationsReducer,
  user: authReducer,
  visitor: visitorReducer,
  skills: skillsReducer,
})

export default rootReducer
