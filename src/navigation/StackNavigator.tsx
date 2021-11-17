import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoadingScreen } from '../screens/LoadingScreen/LoadingScreen';
import { LoginScreen } from '../screens/LoginScreen/LoginScreen';
import { BottomTabsNavigator } from './BottomTabsNavigator/BottomTabsNavigator';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../interfaces/appInterfaces';
import { checkToken } from '../redux/actions/authAction';

const Stack = createStackNavigator();

export const Navigation = () => {
  const dispatch = useDispatch();
  const { status } = useSelector(({ AUTH }: AppState) => AUTH);

  useEffect(() => {
    dispatch(checkToken())
  }, [dispatch])

  if (status === "checking") return <LoadingScreen message="Authenticating..." />

  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: "white",
        },
        headerShown: false
      }}
    >
      {
        (status !== "authenticated")
          ? (<Stack.Screen name="LoginScreen" component={LoginScreen} />)
          : (<Stack.Screen name="BottomTabsNavigator" component={BottomTabsNavigator} />)
      }
    </Stack.Navigator>
  );
}