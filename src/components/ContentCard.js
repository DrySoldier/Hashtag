/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import styles from '../styles';

const ContentCard = ({data, ...rest}) => {
  return (
    <TouchableOpacity onPress={() => rest.onPress(data)}>
      <View style={styles.contentCardContainer}>
        <Image
          style={styles.image}
          source={{uri: data.node.thumbnail_resources[0].src}}
        />
      </View>
    </TouchableOpacity>
  );
};

export default ContentCard;
