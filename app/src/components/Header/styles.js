import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    headerContainer: {
        paddingTop: 12,
        paddingHorizontal: 30
    },
    headerTitle: {
        fontFamily: "Roboto-Black",
        textTransform: "uppercase",
        fontSize: 16,
        lineHeight: 19,
        color: "#D42026"
    },
    headerSubtitle: {
        fontFamily: "Roboto-Light",
        textTransform: "uppercase",
        fontSize: 16,
        lineHeight: 19,
        color: "#D42026"
    },
    headerBottomBorder: {
        borderBottomColor: "#D42026",
        borderBottomWidth: 2,
        width: 52,
        padding: 2
    }
});