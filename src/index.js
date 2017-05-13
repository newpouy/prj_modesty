import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { App, Home, Login, Register, Wall, Friends } from 'containers';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from 'reducers';
import thunk from 'redux-thunk';


//const store = createStore(reducers, applyMiddleware(thunk));

// const store = createStore(reducers, compose(
//   applyMiddleware(thunk),
//   window.devToolsExtension ? window.devToolsExtension() : f => f
// ));
const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(thunk),
  // other store enhancers if any
));

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Home}/>
                <Route path="home" component={Home}/>
                <Route path="login" component={Login}/>
                <Route path="register" component={Register}/>
                <Route path="wall/:username" component={Wall}/>
                <Route path="friends" component={Friends}/>
            </Route>
        </Router>
    </Provider>, rootElement
);
