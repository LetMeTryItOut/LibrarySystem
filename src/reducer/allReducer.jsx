import { combineReducers } from 'redux';
import libraryReducer from './libraryReducer';

//counter is accessed by useSelector()
const allReducers = combineReducers({
    libraryReducer
});

export default allReducers;