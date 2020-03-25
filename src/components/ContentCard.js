/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ContentCard = ({ data, ...rest }) => {

    return (
        <TouchableOpacity onPress={() => rest.onPress(data)}>
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={{ uri: data.node.thumbnail_resources[0].src }}
                />
            </View>
        </TouchableOpacity>
    );

};

const styles = StyleSheet.create({
    container: {
        height: 150,
        width: 150,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        margin: 10,
        padding: 2,
        overflow: 'hidden',
    },
    image: {
        width: '125%',
        height: '125%',
        resizeMode: 'contain',
    },
});

export default ContentCard;
