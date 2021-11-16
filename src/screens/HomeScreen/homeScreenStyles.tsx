import { StyleSheet } from "react-native"

export const homeScreenStyles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: "white",
        flexDirection: "row",
        padding: 7
    },
    itemSeparator: {
        borderBottomColor: "#ECEDF2",
        borderBottomWidth: 1
    },
    listItemDetails: {
        flex: 1,
        paddingRight: 10
    },
    listItemImage: {
        borderRadius: 10,
        height: 60,
        marginRight: 6,
        width: 60
    },
    listItemTitle: {
        color: "#373A4D",
        fontSize: 16
    }
});