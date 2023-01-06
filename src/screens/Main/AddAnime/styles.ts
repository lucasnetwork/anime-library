import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 32,
    backgroundColor: '#fff',
  },
  buttonGetImage: {
    height: 140,
    backgroundColor: '#D9D9D9',
    borderWidth: 1,
    borderStyle: 'dashed',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  input: {
    backgroundColor: '#D9D9D9',
    borderRadius: 5,
    marginTop: 16,
    paddingLeft: 8,
    flex: 1,
    fontSize: 16,
  },
  row: {
    flexDirection: 'row',
  },
  textarea: {
    minHeight: 190,
    borderWidth: 1,
    borderColor: '#000',
    marginTop: 16,
    borderRadius: 5,
  },

  buttonSave: {
    backgroundColor: '#CC0000',
    borderRadius: 5,
    height: 47,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 32,
    marginBottom: 32,
  },
  buttonSaveText: {
    color: '#fff',
    fontSize: 24,
  },
});
