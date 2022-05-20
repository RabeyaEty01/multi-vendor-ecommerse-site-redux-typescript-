import { applyMiddleware, combineReducers, createStore } from "redux";
import cartReducer from "./reducers/cartReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";
import authReducer from "./reducers/authReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


const persistConfig = {
    key: "root",
    storage,
}

const rootReducer = combineReducers({
    cart: cartReducer,
    auth: authReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(ReduxThunk)));

// export type AppState = ReturnType<typeof rootReducer>;
export const persistor = persistStore(store);

export default store;