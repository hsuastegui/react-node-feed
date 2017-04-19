import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
    paddingTop: 0,
    paddingBottom: 0
  },
  container: {
    padding: 10
  },
  header: {
    marginTop: 20,
    marginBottom: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#000000',
    color: '#FFFFFF',
    alignSelf: 'stretch',
    textAlign: 'center'
  },
  link: {
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 4,
    padding: 5,
    width: 80,
    alignItems: 'center'
  },
  form: {
    marginBottom: 10,
    marginTop: 10,
    flexDirection: 'row'
  },
  input: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10
  },
  submit: {
    backgroundColor: '#CCC',
    borderColor: '#999',
    width: 100,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5
  }
});

export default styles;
