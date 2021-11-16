import React from 'react'
import { ActivityIndicator, View, Text } from 'react-native';

interface Props {
    message: string
}

export const LoadingScreen = ({ message }: Props) => {
    return (
        <View style={{ alignItems: "center", flex: 1, justifyContent: "center" }}>
            <ActivityIndicator size={50} color="#373A4D"></ActivityIndicator>
            <Text>{message}</Text>
        </View>
    )
}
