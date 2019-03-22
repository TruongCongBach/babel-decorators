import React              from 'react';
import ReactDOM           from 'react-dom';
import './index.css';
import App                from './App';
import * as serviceWorker from './serviceWorker';
import { Provider }       from 'react-redux';
import {applyMiddleware, createStore, combineReducers  }     from 'redux';


const middwareOne = () => next => action => {
    if(action.type === 'CHANGE_TEXT_BACH_RUOI') {
        return next({
            ...action,
            type: 'ACTION_MIDDWARE',
            text: action.text + 11111
        })
    }
    return next(action)
};

const midwareTest = applyMiddleware(
    middwareOne
);



const testStore =  (state={bachRuoi: 'asdasd'}, action) => {
    if(action.type === 'ACTION_MIDDWARE') {
        return {
            ...state,
            bachRuoi: action.text
        }
    }
    return state
};



const reducers = combineReducers({
    testStore
});



const store = createStore(reducers, midwareTest);


ReactDOM.render(<Provider store={store}>
    <App/>
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
