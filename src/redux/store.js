import { createStore,combineReducers, applyMiddleware} from 'redux';
import { filmReducer } from './films/filmsReducer';
import Thunk from 'redux-thunk';

const rootReducer = combineReducers({dataFilms:filmReducer});

export const store = createStore(rootReducer, applyMiddleware(Thunk));