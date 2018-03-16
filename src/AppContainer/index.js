import React, { Component } from 'react';

import {Router} from '../routes/scenes';
import { Provider } from 'react-redux';

export default class AppContainer extends Component {
    render() {
        return (
            <Provider store={this.props.store}>
                <Router/>
            </Provider>
        )
    }
}