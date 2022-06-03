import {StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#99e868',
  },
  buttonAdd: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    margin: 10,
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  textTitle: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: '#99e868',
    paddingVertical: 10,
  },
  textInput: {
    margin: 20,
    borderRadius: 15,
    paddingLeft: 10,
    color: 'black',
    borderColor: 'red',
    borderWidth: 2,
  },
  textAdd: {
    fontSize: 30,
    color: 'white',
  },
  viewButtonDeleteAll: {
    backgroundColor: 'green',
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    margin: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: 80,
    height: 40,
  },
  textDeleteAll: {
    color: 'white',
  },
  textContent: {
    textAlign: 'center',
    color: 'black',
  },
  textEmpty: {
    textAlign: 'center',
    marginTop: 20,
    color: 'grey',
  },
  view: {
    backgroundColor: '#68e8e8',
    flex: 1,
    paddingBottom: 50,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
});
export default styles;
