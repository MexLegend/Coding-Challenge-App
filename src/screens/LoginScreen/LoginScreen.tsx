import React, { useState } from 'react';
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { removeError, startLogin } from '../../redux/actions/authAction';
import { KeyboardAvoidingView, Text, TextInput, View, Platform, Keyboard } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { loginScreenStyles } from './loginScreenStyles';
import { AppState } from '../../interfaces/appInterfaces';

export const LoginScreen = () => {

    const dispatch = useDispatch();
    const { errorMessage } = useSelector(({ AUTH }: AppState) => AUTH);
    const { apiData } = useSelector(({ APIDATA }: AppState) => APIDATA);

    const { username, password, onChange } = useForm({
        username: '',
        password: ''
    });

    const [showPassword, setShowPassword] = useState(true);

    const onLogIn = async () => {
        dispatch(removeError());
        Keyboard.dismiss();
        dispatch(startLogin({ password, username }));
    }

    console.log(apiData);
    

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
                {/* Form Container */}
                <View style={loginScreenStyles.formContainer}>
                    {/* Formfield */}
                    <View style={{ marginBottom: 21 }}>
                        <Text style={loginScreenStyles.label}>Email</Text>
                        <TextInput
                            autoCapitalize="none"
                            autoCorrect={false}
                            keyboardType="email-address"
                            onChangeText={(value) => onChange(value, 'username')}
                            onSubmitEditing={onLogIn}
                            placeholder="email"
                            placeholderTextColor='#8F92A9'
                            style={loginScreenStyles.textInput}
                            value={username} />
                    </View>
                    {/* Formfield */}
                    <View>
                        <Text style={loginScreenStyles.label}>Password</Text>
                        <View style={loginScreenStyles.conpoundFormField}>
                            <TextInput
                                autoCapitalize="none"
                                autoCorrect={false}
                                onChangeText={(value) => onChange(value, 'password')}
                                onSubmitEditing={onLogIn} placeholder="password"
                                placeholderTextColor='#8F92A9'
                                secureTextEntry={showPassword}
                                style={[loginScreenStyles.conpoundTextInput, loginScreenStyles.textInput]}
                                value={password} />
                            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                                <IonIcon name={showPassword ? "eye" : "eye-off"} size={22} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    {/* Forgot Password  */}
                    <TouchableOpacity
                        style={loginScreenStyles.forgotPasswordButton}
                        onPress={() => { }}>
                        <Text style={loginScreenStyles.forgotPasswordText}>Forgot Password</Text>
                    </TouchableOpacity>
                    {/* Submit Button */}
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={onLogIn}
                        style={loginScreenStyles.submitButton}>
                        <Text style={loginScreenStyles.submitButtonText}>Log in</Text>
                    </TouchableOpacity>

                    {(errorMessage !== "") && <Text style={loginScreenStyles.errorMessage}>{errorMessage}</Text>}
                </View>
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
