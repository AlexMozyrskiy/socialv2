import {createStore, combineReducers, applyMiddleware} from "redux";
import thunkMiddleWare from "redux-thunk";
// import { reducer as formReducer } from "redux-form";
import { compose } from "redux";
import loginModalWindowReducer from "../loginModalWindow/reducer";
import authUserDataReducer from "../authUserData/reducer";
import headerReducer from "../header/reducer";
import initializedAppReducer from "../initializedApp/reducer";
import notOwnerUserDataReducer from "../notOwnerUserData/reducer";
import ownerProfilePageReducer from "../ownerProfilePage/reducer";
import usersReducers from "../users/reducer";


let rootReducer = combineReducers({
    loginModalWindow: loginModalWindowReducer,
    authUserData: authUserDataReducer,
    header: headerReducer,
    initializedApp: initializedAppReducer,
    notOwnerUserData: notOwnerUserDataReducer,
    ownerProfilePage: ownerProfilePageReducer,
    users: usersReducers,
    // form: formReducer
});

type RootReducerTSType = typeof rootReducer;                        // тут будет (state: GlobslState) => GlobalState, typeof после отработки опрелдеит такой тип: (state: GlobslState) => GlobalState для функции rootStore
export type RootReducerSateTSType = ReturnType<RootReducerTSType>   // тут мы вытащили тип GlobslState (то есть то что функуия возвращает) из типа редюсера

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunkMiddleWare)
  ));                                       // это для использования extension'а redux dev tools в Google Chrome

export default store;