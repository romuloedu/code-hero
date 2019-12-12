import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './screens/Home';

const stackNavigator = createStackNavigator({
    Home: {
        screen: Home
    }
}, {
    headerMode: 'none'
});

export default createAppContainer(stackNavigator);
