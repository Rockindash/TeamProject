import { combineReducers } from "redux"

import items from "../redux/reducer/itemReducer";

export default combineReducers({
    items: items
})