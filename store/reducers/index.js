import {combineReducers} from "redux"

import {events} from "./events"
import {popup} from './popup'

export default combineReducers({events, popup})