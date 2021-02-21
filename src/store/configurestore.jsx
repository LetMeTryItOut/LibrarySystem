import { applyMiddleware, createStore } from 'redux';
import allReducers from '../reducer/allReducer';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

export default function configureStore(initialState) {
    return createStore(
        allReducers,
        initialState,
        applyMiddleware(reduxImmutableStateInvariant())
    );
}