import { combineReducers } from "redux"

import items from "../redux/reducer/itemReducer";
import main from "../redux/reducer/mainReducer";
import field from "../redux/reducer/fieldReducer";

export default combineReducers({
    items: items,
    main: main,
    field: field
})