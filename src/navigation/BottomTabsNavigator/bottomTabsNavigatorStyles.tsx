import { StyleSheet } from "react-native"

export const bottomTabsNavigatorStyles = StyleSheet.create({
    headerRightContainerStyle: {
        paddingRight: 24
    },
    headerRightStyle: {
        color: "#373A4D",
        fontWeight: "400"
    },
    headerStyle: {
        borderBottomColor: '#ECEDF2',
        borderBottomWidth: 1,
        height: 96,
    },
    headerTitleStyle: {
        color: "#373A4D",
        fontSize: 28,
        paddingLeft: 8
    },
    tabBarLabelStyle: {
        color: '#373A4D',
        fontSize: 12
    },
    tabBarStyle: {
        alignItems: 'center',
        flexDirection: "column",
        justifyContent: 'center',
        height: 70,
        paddingBottom: 10,
    }
});