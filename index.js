import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native';

//Redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';


import AllReducer from './reducers';

//Redux saga
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootSaga'; 

// component
import HomeContainer from "./containers/homeContainer";

// apply redux and redux saga
const sagaMiddleware = createSagaMiddleware();
let store = createStore(AllReducer, applyMiddleware(sagaMiddleware));


class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Provider store={store}>
                <HomeContainer />
            </Provider>
        );
    }
}

sagaMiddleware.run(rootSaga);
AppRegistry.registerComponent('nhanvien', () => App);
