import {combineReducers} from "redux";
import { UserReducer } from "./store/UserReducer";
export const rootReducer = combineReducers({user:UserReducer});
export type AppState = ReturnType<typeof rootReducer>;