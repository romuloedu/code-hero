import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';

import styles from './styles';

export default class ResultsList extends Component {
    render() {
        return (
            <View style={styles.resultsContainer}>
                <Text>Resultados</Text>
            </View>
        );
    }
}
