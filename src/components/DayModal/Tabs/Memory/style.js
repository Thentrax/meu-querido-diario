import { StyleSheet } from 'react-native';
import { MainTheme } from '../../../../theme/MainTheme';

export const styles = StyleSheet.create({
  container: {
    height: '90%',
    width: '100%',
    justifyContent: 'space-around',
    position: 'relative',
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
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
  },
});