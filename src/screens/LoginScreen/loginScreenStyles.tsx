import { StyleSheet } from "react-native"

export const loginScreenStyles = StyleSheet.create({
    conpoundFormField: {
        alignItems: 'center',
        backgroundColor: "#F5F5FA",
        flexDirection: 'row',
        paddingRight: 20,
    },
    conpoundTextInput: {
        flex: 1,
        paddingRight: 10,
    },
    container: {
        flex: 1,
        marginLeft: 24,
        marginRight: 24,
    },
    errorMessage: {
        color: 'red',
        marginTop: 8,
        textAlign: "center"
    },
    forgotPasswordButton: {
        alignSelf: "flex-end",
        marginBottom: 29,
        marginTop: 11,
    },
    forgotPasswordText: {
        color: 'black',
        fontSize: 14,
        textAlign: "right"
    },
    formContainer: {
        flex: 2,
        justifyContent: 'center',
        marginVertical: 10
    },
    formfield: {
        marginBottom: 21
    },
    header: {
        flex: 1,
        justifyContent: 'center'
    },
    label: {
        color: "#373A4D",
        fontSize: 12,
        marginBottom: 4,
        textTransform: "uppercase"
    },
    placeholder: {
        color: "#8F92A9",
    },
    signup: {
        color: 'black',
        alignItems: "center",
        flex: 1,
        flexDirection: "row",
        justifyContent: "center"
    },
    signupText: {
        color: 'black',
        fontWeight: "700",
        marginLeft: 5
    },
    submitButton: {
        alignItems: "center",
        backgroundColor: "#373A4D",
        borderRadius: 2,
        height: 56,
        justifyContent: "center",
    },
    submitButtonText: {
        color: 'white',
        fontSize: 14,
        fontWeight: "700",
        textTransform: "uppercase"
    },
    subtitle: {
        color: "#373A4D",
        fontSize: 14,
        height: 17,
    },
    textInput: {
        backgroundColor: "#F5F5FA",
        borderRadius: 2,
        height: 48,
        paddingLeft: 24
    },
    title: {
        color: "#373A4D",
        fontSize: 28,
        height: 40,
    }
});