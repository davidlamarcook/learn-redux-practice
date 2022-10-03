import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware, combineReducers } from 'redux'
import allReducers from './reducers';

//STORE -> Globalized state

//const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

//ACTION -> give it a name on what you want to do (Incrememnt in this project)
// const increment = () => {
//   return {
//     type: 'INCREMENT'
//   }
// }

// const decrement = () => {
//   return {
//     type: 'DECREMENT' 
//   }
// }

// //REDUCER -> CHeck what action you did & then modify store

// const counter = (state = 0, action) => {
//   switch (action.type){
//     case 'INCREMENT':
//       return state + 1;
//     case 'DECREMENT':
//       return state - 1;
//   } 
// };

// let store = createStore(counter);

// //Display it on the console
// store.subscribe(() => console.log(store.getState()))

// //DISPATCH -> Dispatch this action to the reducer and update state
// store.dispatch(increment)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
