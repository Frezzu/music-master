import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './views/Home/Home';
import {Provider} from "react-redux";
import {createStore} from 'redux';
import reducers from './reducers';

const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home}/>
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
