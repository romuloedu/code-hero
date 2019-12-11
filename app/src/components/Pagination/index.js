import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableWithoutFeedback
} from 'react-native';

import styles from './styles';

export default class Pagination extends Component {
    render() {

        const { total, count } = this.props;

        return (
            <View style={styles.paginationContainer}>
                <TouchableWithoutFeedback
                    onPress={() => console.log("Botão pressionado.")}>
                    <View style={[styles.paginationButton,
                    styles.paginationActived]}>
                        <Text style={[styles.paginationButtonText,
                        styles.paginationButtonTextActived]}>
                            1
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                    onPress={() => console.log("Botão pressionado.")}>
                    <View style={[styles.paginationButton]}>
                        <Text style={[styles.paginationButtonText]}>
                            2
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                    onPress={() => console.log("Botão pressionado.")}>
                    <View style={[styles.paginationButton]}>
                        <Text style={[styles.paginationButtonText]}>
                            3
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}
