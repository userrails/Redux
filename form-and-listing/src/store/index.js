import { createStore } from 'redux';
import rootReducer from '../store/posts/reducers';

const store = createStore(rootReducer);

export default store;