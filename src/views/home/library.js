import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import globalStyle from '../../style/globalStyle';

const LibraryScreen = ({navigation}) => {
    return (
        <View style={globalStyle.container}>
            <Text>Library Screen</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Book')}>
                <Text style={globalStyle.btn}>Book Screen</Text>
            </TouchableOpacity>
        </View>
    )
}

export default LibraryScreen;