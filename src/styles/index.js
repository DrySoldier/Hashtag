import {StyleSheet} from 'react-native';
import {moderateScale as ms} from 'src/constants/scaling';

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
  contentCardContainer: {
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

export default styles;
