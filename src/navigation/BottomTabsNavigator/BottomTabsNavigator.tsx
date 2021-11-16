import React from 'react'
import { useDispatch } from 'react-redux';
import { startLogout } from '../../redux/actions/authAction';
import { Text, TouchableOpacity } from 'react-native';
import { bottomTabsNavigatorStyles } from './bottomTabsNavigatorStyles';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { HomeScreen } from '../../screens/HomeScreen/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export const BottomTabsNavigator = () => {
    const dispatch = useDispatch();

    const onLogOut = async () => {
        dispatch(startLogout());
    }

    return (
        <Tab.Navigator screenOptions={() => ({
            // Log out Action
            headerRight: () => (
                <TouchableOpacity onPress={onLogOut}>
                    <Text style={bottomTabsNavigatorStyles.headerRightStyle}>LOG OUT</Text>
                </TouchableOpacity>
            ),
            // Tab Bar Icons -> Home Icon
            tabBarIcon: () => {
                return <IonIcon name="home-outline" size={26} style={{ color: '#373A4D' }} />
            },
            // Tab Bar Labels -> Home
            tabBarLabel: () => {
                return <Text style={bottomTabsNavigatorStyles.tabBarLabelStyle}>Home</Text>
            },
            // Tab Bar & Tab Navigator Styles
            tabBarStyle: bottomTabsNavigatorStyles.tabBarStyle,
            headerRightContainerStyle: bottomTabsNavigatorStyles.headerRightContainerStyle,
        })}>
            {/* Home Screen Tab */}
            <Tab.Screen name="Home" component={HomeScreen} options={{
                title: 'My Photos',
                headerStyle: bottomTabsNavigatorStyles.headerStyle,
                headerTitleStyle: bottomTabsNavigatorStyles.headerTitleStyle
            }} />
        </Tab.Navigator>
    );
}
