import authentication from './authentication';
import memo from './memo';
import search from './search';
import friend from './friend';


import { combineReducers } from 'redux';

export default combineReducers({
    authentication, memo, search, friend
});
