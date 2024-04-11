import { StyleSheet } from 'react-native';
import { MainTheme } from '../../../../theme/MainTheme';

export const styles = StyleSheet.create({
  container: {
    height: '90%',
    width: '100%',
    justifyContent: 'space-around',
    position: 'relative',
  },
  form: {
    display: 'flex',
    width: '100%',
    gap: 8,
    padding: 16,
  },
  text: {
    fontSize: 20,
    color: MainTheme.colors.primary,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  text2: {
    fontSize: 16,
    color: MainTheme.colors.primary,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  textArea: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    height: 100,
    textAlignVertical: 'top',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
  },
});