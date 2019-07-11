// * Description: App Entry Point

import React, { Component } from 'react';

import Router from './app/config/routes'
// import store from './app/redux/store';
import Home from './src/Home';

export default class App extends Component {
    render() {
        return (
            /*<Provider store={store}>*/
                <Home />
            // </Provider>
        );
    }
}