import changeNumByOne from './NumByOne';
import changeNumByFive from './NumByFive';
import changeNumByTen from './NumByTen';

import { combineReducers } from 'redux';


const rootReducers = combineReducers(
    {
        changeNumByOne,
        changeNumByFive,
        changeNumByTen,
    }
)

export default rootReducers