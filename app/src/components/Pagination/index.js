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

    state = {
        totalPages: 0,
        pages: []
    }

    handleNavigationButtons = () => {

        // const { currentPage } = this.props;
        // const { totalPages } = this.state;
        var pagesAux = [];
        var totalPages = 94;
        var currentPage = 90;
        var cont = 1;
        var auxCont = currentPage;

        while (cont <= 3 &&
            auxCont <= totalPages) {

            pagesAux.push({
                id: auxCont,
                isCurrentPage: currentPage === auxCont
            });

            cont++;
            auxCont++;
        }

        this.setState({ pages: pagesAux });
    }

    componentDidMount = () => {
        this.handleNavigationButtons();
    }

    render() {

        const { pages } = this.state;

        return (
            <View style={styles.paginationContainer}>
                {
                    pages.map((page) => (
                        <TouchableWithoutFeedback
                            key={page.id}
                            onPress={() => this.props.getPage(page.id)}>
                            <View style={[styles.paginationButton]}>
                                <Text style={[styles.paginationButtonText]}>
                                    {page.id}
                                </Text>
                            </View>
                        </TouchableWithoutFeedback>
                    ))
                }
            </View>
        );
    };
}

