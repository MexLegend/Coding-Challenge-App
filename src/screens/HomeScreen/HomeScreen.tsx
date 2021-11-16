
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, FlatList, Image } from 'react-native';
import { homeScreenStyles } from './homeScreenStyles';
import { loadApiData } from '../../redux/actions/apiDataAction';
import { AppState, ApiData } from '../../interfaces/appInterfaces';
import { LoadingScreen } from '../LoadingScreen/LoadingScreen';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const HomeScreen = () => {

    const dispatch = useDispatch();
    const { token } = useSelector(({ AUTH }: AppState) => AUTH);
    const { apiData, loading } = useSelector(({ APIDATA }: AppState) => APIDATA);

    useEffect(() => {
        dispatch(loadApiData(token as string));
    }, [dispatch]);

    if (loading) return <LoadingScreen message="Loading data..." />

    const renderListItems = (listItemData: ApiData) => {
        return <>
            {/* Item Container */}
            <TouchableOpacity activeOpacity={0.8} style={homeScreenStyles.container}>
                {/* Item Image */}
                <Image
                    style={homeScreenStyles.listItemImage}
                    resizeMode={'cover'}
                    source={{ uri: listItemData.image }}
                />
                {/* Item Details */}
                <View style={homeScreenStyles.listItemDetails}>
                    <Text style={homeScreenStyles.listItemTitle}>{listItemData.title}</Text>
                    <Text ellipsizeMode={"tail"} numberOfLines={1} style={{ color: "#8F92A9" }}>{listItemData.description}</Text>
                </View>
            </TouchableOpacity>

        </>
    }

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={apiData}
                keyExtractor={(apiData) => apiData.id.toString()}
                ItemSeparatorComponent={() => (
                    <View style={homeScreenStyles.itemSeparator}></View>
                )}
                renderItem={({ item }) => renderListItems(item)}
            ></FlatList>
        </View>
    )
}
