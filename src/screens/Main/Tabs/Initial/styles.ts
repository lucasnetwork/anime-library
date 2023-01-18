import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    padding: 16,
  },
  containerModal: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  containerContentModal: {
    backgroundColor: '#fff',
    width: 200,
    padding: 32,
  },
  buttonModal: {
    backgroundColor: '#CC0000',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 5,
  },
  textModal: {
    color: '#fff',
  },
});
