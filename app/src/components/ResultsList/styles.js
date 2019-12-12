import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    resultsContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start"
    },
    resultCard: {
        flex: 1,
        flexDirection: "row",
        minWidth: "100%",
        maxHeight: 100,
        justifyContent: "flex-start",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#D42026"
    },
    resultThumbnail: {
        width: 65,
        height: 65,
        borderRadius: 55,
        marginHorizontal: 30,
        marginVertical: 18
    },
    resultName: {
        fontSize: 15
    },
    resultHeaderContainer: {
        flexDirection: "row",
        width: "100%",
        height: 35,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#D42026"
    },
    resultHeaderThumbnail: {
        width: 65,
        marginHorizontal: 30
    },
    resultHeaderName: {
        fontSize: 15,
        color: "#FFF"
    },
    emptyListContainer: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    emptyListText: {
        color: "#D42026",
        fontSize: 18,
        fontWeight: "bold"
    }
});