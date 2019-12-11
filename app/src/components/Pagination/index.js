import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';

import styles from './styles';

export default class Pagination extends Component {
    render() {
        return (
            <View style={styles.paginationContainer}>
                <Text>Paginação</Text>
            </View>
        )
    }
}
