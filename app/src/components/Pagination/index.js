import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableWithoutFeedback,
    FlatList,
    ScrollView
} from 'react-native';

import styles from './styles';

export default class Pagination extends Component {

    render() {

        const { pages } = this.props;

        return (
            <View style={styles.paginationContainer}>
                {
                    (pages) ?
                        pages.map(result => (
                            <TouchableWithoutFeedback
                                key={result.id}
                                onPress={() => this.props.getPage(result.id)}>
                                <View style={[styles.paginationButton,
                                result.isCurrentPage
                                    ? styles.paginationButtonActived
                                    : null]}>
                                    <Text style={[styles.paginationButtonText,
                                    result.isCurrentPage
                                        ? styles.paginationButtonTextActived
                                        : null]}>
                                        {result.id}
                                    </Text>
                                </View>
                            </TouchableWithoutFeedback>
                        ))
                        : null
                }
            </View>
        );
    };
}

