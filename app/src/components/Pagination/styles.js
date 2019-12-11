import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    paginationContainer: {
        flexDirection: "row",
        alignSelf: "baseline",
        width: "100%",
        paddingTop: 18,
        paddingBottom: 24,
        justifyContent: "space-around",
        alignItems: "center",
        borderTopWidth: 1,
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
        alignItems: "center"
    },
    paginationActived: {
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
    }
});