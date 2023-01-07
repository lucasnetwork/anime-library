import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    height: Dimensions.get('window').height - 200,
  },

  imageContainer: {
    position: 'relative',
    flex: 1,
  },

  containerContent: {
    paddingHorizontal: 16,
    paddingVertical: 32,
  },
  containerGradient: {
    position: 'absolute',
    zIndex: 2,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  textImage: {
    zIndex: 3,
    color: '#fff',
    fontSize: 24,
    fontWeight: '700',
    position: 'absolute',
    bottom: 48,
    left: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 8,
  },
  containerInfos: {
    marginTop: 16,
  },
  infoContainer: {
    marginRight: 8,
  },
  textInfo: {
    marginLeft: 8,
  },
  buttonGoBack: {
    position: 'absolute',
    top: 8,
    left: 8,
    zIndex: 3,
  },
});
