import { combineReducers } from "redux"

import items from "../redux/reducer/itemReducer";
import main from "../redux/reducer/mainReducer";

export default combineReducers({
    items: items,
    main: main
})