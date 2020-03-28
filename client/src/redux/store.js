import { createStore } from "redux"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import rootReducer from "./rootReducer";

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ["items","main"]
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export var store = createStore(persistedReducer), persistor = persistStore(store)