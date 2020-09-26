import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { smurfReducer } from './reducers/reducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import "./index.css";
import App from "./components/App";

const store = createStore(smurfReducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
