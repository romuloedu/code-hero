import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    paginationContainer: {
        flexDirection: "row",
        width: "100%",
        minHeight: 110,
        paddingTop: 18,
        paddingBottom: 24,
        borderTopWidth: 1,
        justifyContent: "space-around",
        alignItems: "center",
        borderTopColor: "#D42026",
        borderBottomColor: "#D42026",
        borderBottomWidth: 15
    },
    paginationButton: {
        width: 40,
        height: 40,
        borderWidth: 1,
        borderColor: "#D42026",
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 10
    },
    paginationButtonActived: {
        borderWidth: 1,
        borderColor: "#D42026",
        backgroundColor: "#D42026",
        justifyContent: "center",
        alignItems: "center"
    },
    paginationButtonText: {
        fontSize: 14,
        color: "#D42026"
    },
    paginationButtonTextActived: {
        color: "#FFF"
    },
    leftArrowContainer: {
        marginLeft: 30,
        marginRight: 60
    },
    rightArrowContainer: {
        marginLeft: 60,
        marginRight: 30
    },
    numeratedButtonsContainer: {
        flexDirection: "row"
    }
});