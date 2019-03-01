import { createStore } from 'redux';
import {reducer} from '../reducer';

// now create a store
const store = createStore(reducer);

export default store;
