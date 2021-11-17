import React, { useState } from 'react';
import { KeyboardAvoidingView, Text, TextInput, View, Platform, Keyboard, ScrollView, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import IonIcon from 'react-native-vector-icons/Ionicons';

import { AppState, LoginData } from '../../interfaces/appInterfaces';
import { removeError, startLogin } from '../../redux/actions/authAction';
import { loginScreenStyles } from './loginScreenStyles';
import { Formik, FormikHelpers } from 'formik';
import { object, string } from 'yup';

export const LoginScreen = () => {

    const dispatch = useDispatch();
    const { errorMessage, status } = useSelector(({ AUTH }: AppState) => AUTH);

    const initialValues: LoginData = {
        password: '',
        username: ''
    }

    // Form Validation
    const validationSchema = () => object({
        password: string().required('The password is required'),
        username: string().required('The email is required')
    });

    const [showPassword, setShowPassword] = useState(true);

    const onLogIn = async ({ password, username }: LoginData, { resetForm }: FormikHelpers<LoginData>) => {
        dispatch(removeError());
        Keyboard.dismiss();
        dispatch(startLogin({ password, username }));
        if (status === "authenticated") resetForm();
    }

    return (
        // {/* Container */}
        <KeyboardAvoidingView
            style={loginScreenStyles.container}
            behavior={(Platform.OS === 'ios') ? 'padding' : 'height'}
        >
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                {/* Header */}
                <View style={loginScreenStyles.header}>
                    <Text style={loginScreenStyles.title}>Log In</Text>
                    <Text style={loginScreenStyles.subtitle}>Welcome back</Text>
                </View>
                <Formik
                    initialValues={initialValues}
                    onSubmit={onLogIn}
                    validationSchema={validationSchema}
                >
                    {({
                        handleBlur,
                        handleSubmit,
                        setFieldValue,
                        errors,
                        isSubmitting,
                        isValidating,
                        values }) => (

                        // Form Container
                        <View style={loginScreenStyles.formContainer}>
                            {/* Formfield */}
                            <View style={{ marginBottom: 21 }}>
                                <Text style={loginScreenStyles.label}>Email</Text>
                                <TextInput
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    keyboardType="email-address"
                                    onBlur={handleBlur('username')}
                                    onChangeText={value => setFieldValue('username', value)}
                                    onSubmitEditing={handleSubmit}
                                    placeholder="email"
                                    placeholderTextColor='#8F92A9'
                                    style={loginScreenStyles.textInput}
                                    value={values.username} />
                                {/* Required Username Error Message */}
                                {
                                    errors.username &&
                                    <Text
                                        style={[loginScreenStyles.errorMessage, loginScreenStyles.textLeft]}>
                                        {errors.username}
                                    </Text>
                                }
                            </View>
                            {/* Formfield */}
                            <View>
                                <Text style={loginScreenStyles.label}>Password</Text>
                                <View style={loginScreenStyles.conpoundFormField}>
                                    <TextInput
                                        autoCapitalize="none"
                                        autoCorrect={false}
                                        onBlur={handleBlur('password')}
                                        onChangeText={value => setFieldValue('password', value)}
                                        onSubmitEditing={handleSubmit} placeholder="password"
                                        placeholderTextColor='#8F92A9'
                                        secureTextEntry={showPassword}
                                        style={[loginScreenStyles.conpoundTextInput, loginScreenStyles.textInput]}
                                        value={values.password} />
                                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                                        <IonIcon name={showPassword ? "eye" : "eye-off"} size={22} />
                                    </TouchableOpacity>
                                </View>
                                {/* Required Password Error Message */}
                                {
                                    errors.password &&
                                    <Text
                                        style={[loginScreenStyles.errorMessage, loginScreenStyles.textLeft]}>
                                        {errors.password}
                                    </Text>
                                }
                            </View>
                            {/* Forgot Password  */}
                            <TouchableOpacity
                                style={loginScreenStyles.forgotPasswordButton}
                                onPress={() => { }}>
                                <Text style={loginScreenStyles.forgotPasswordText}>Forgot Password</Text>
                            </TouchableOpacity>
                            {/* Submit Button */}
                            <TouchableOpacity
                                disabled={isSubmitting || isValidating}
                                activeOpacity={0.8}
                                onPress={handleSubmit}
                                style={loginScreenStyles.submitButton}>
                                <Text style={loginScreenStyles.submitButtonText}>Log in</Text>
                            </TouchableOpacity>

                            {(errorMessage !== "") && <Text style={loginScreenStyles.errorMessage}>{errorMessage}</Text>}
                        </View>
                    )}
                </Formik>

                {/* Sign Up */}
                <View style={loginScreenStyles.signup}>
                    <Text style={{ color: 'black' }}>Don't have an account?</Text>
                    <TouchableOpacity onPress={() => { }}>
                        <Text style={loginScreenStyles.signupText}>Sign up here</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView >
    )
}
