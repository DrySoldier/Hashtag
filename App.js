/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList, TextInput, Text, ActivityIndicator, Linking } from 'react-native';
import { moderateScale as ms } from 'src/constants/scaling';
import ContentCard from 'src/components/ContentCard';

const App = () => {

  const [parsedData, setData] = useState();
  const [value, setValue] = useState('love');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    _setDataFunc();
  }, []);

  async function getPostsBasedOnHashtag(hashtag) {
    try {
      let response = await fetch(`https://www.instagram.com/explore/tags/${hashtag}/?__a=1`);
      let responseJson = await response.json();
      setError(false);
      return responseJson;
    } catch (err) {
      setError(true);
      setLoading(false);
    }
  }

  const _setDataFunc = () => {
    let viewData = [];
    setLoading(true);
    getPostsBasedOnHashtag(value)
      .then(res => {
        let path = res.graphql.hashtag.edge_hashtag_to_media.edges;
        viewData = path.map(element => element);
        setData(viewData);
        setLoading(false);
      })
      .catch(err => console.log(err));
  };

  const _handlePress = data => {
    Linking.openURL(`https://www.instagram.com/p/${data.node.shortcode}/`);
  };

  return (
    <View style={styles.container}>

      <Text style={styles.desc}>Enter any Instagram hashtag and get posts based on it!</Text>

      <View style={styles.textInputContainer}>
        <Text style={styles.hashtag}># </Text>
        <TextInput
          style={styles.textInput}
          autoCapitalize={'none'}
          onChangeText={text => setValue(text)}
          onSubmitEditing={text => {
            if (text !== '') {
              _setDataFunc();
            }
          }}
          value={value} />
      </View>

      {error && <View>
        <Text>No posts with this hashtag were found, try another keyword!</Text>
      </View>}

      {loading && <ActivityIndicator style={styles.actIndicator} />}

      <FlatList
        style={styles.flatList}
        data={parsedData}
        numColumns={2}
        renderItem={({ item }) => {
          return (
            <ContentCard data={item} onPress={data => _handlePress(data)} />
          );
        }}
        keyExtractor={(item, index) => item + index}
      />

    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
  },
  flatList: {
    paddingTop: ms(10),
    marginBottom: ms(25),
  },
  textInput: {
    width: '90%',
    height: ms(25),
    borderColor: 'black',
    borderWidth: ms(1),
    borderRadius: ms(5),
    paddingLeft: ms(5),
  },
  textInputContainer: {
    flexDirection: 'row',
    marginBottom: ms(15),
    justifyContent: 'center',
    alignItems: 'center',
  },
  hashtag: {
    fontWeight: 'bold',
    fontSize: ms(18),
  },
  desc: {
    paddingTop: ms(50),
    paddingBottom: ms(15),
  },
  actIndicator: {
    margin: ms(15),
  },
});

export default App;
