import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// import { GoogleOAuthProvider } from '@react-oauth/google';

import { reducers } from './reducers';
import App from './App';
import './index.css';

const store = createStore(reducers, compose(applyMiddleware(thunk))); //TODO: check what means this

ReactDOM.render(
    <Provider store={store}>
        {/* <GoogleOAuthProvider clientId="978168131609-raji7s2qaof81vo32a92ajfgnra3r15e.apps.googleusercontent.com"> */}
            <App />
        {/* </GoogleOAuthProvider> */}
    </Provider>, 
    document.getElementById('root')
);
