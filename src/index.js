import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { store } from './js/store/storeConfig';
import App from './js/components/App';
import 'semantic-ui-css/semantic.min.css';
import './scss/main.scss';

ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
    document.getElementById('root')
);
