import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableWithoutFeedback
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import styles from './styles';

export default class Pagination extends Component {

    renderPreviousButton = (pageId) => {
        return (
            <TouchableWithoutFeedback
                onPress={() => this.props.getPage(pageId)}>
                <View>
                    <Ionicons name={"ios-arrow-dropleft-circle"}
                        size={30} color={'#F25835'} />
                </View>
            </TouchableWithoutFeedback >
        )
    }

    renderNextButton = (pageId) => {
        return (
            <TouchableWithoutFeedback
                onPress={() => this.props.getPage(pageId)}>
                <View>
                    <Ionicons name={"ios-arrow-dropright-circle"}
                        size={30} color={'#F25835'} />
                </View>
            </TouchableWithoutFeedback >
        )
    }

    renderButton = (item) => {
        return (
            <TouchableWithoutFeedback
                key={item.id}
                onPress={() => this.props.getPage(item.id)}>
                <View style={[styles.paginationButton,
                item.isCurrentPage
                    ? styles.paginationButtonActived
                    : null]}>
                    <Text style={[styles.paginationButtonText,
                    item.isCurrentPage
                        ? styles.paginationButtonTextActived
                        : null]}>
                        {item.id}
                    </Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }

    render() {

        const {
            currentPage,
            pagination: {
                hasNextPage,
                hasPreviousPage,
                pages }
        } = this.props;

        return (
            <View style={styles.paginationContainer}>
                <View style={styles.leftArrowContainer}>
                    {
                        (hasPreviousPage)
                            ? this.renderPreviousButton(currentPage - 1)
                            : <View />
                    }
                </View>
                <View style={styles.numeratedButtonsContainer}>
                    {
                        (pages)
                            ? pages.map(result => this.renderButton(result))
                            : null
                    }
                </View>
                <View style={styles.rightArrowContainer}>
                    {
                        (hasNextPage)
                            ? this.renderNextButton(currentPage + 1)
                            : <View />
                    }
                </View>
            </View>
        );
    };
}

