import { createStore } from "redux";
import News from "../reducers/news";
export default createStore(News,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());