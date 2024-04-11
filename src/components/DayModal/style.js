import { Dimensions, StyleSheet } from 'react-native';
import { MainTheme } from '../../theme/MainTheme';

export const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').height * 0.8,
    display: 'flex',
    backgroundColor: MainTheme.colors.background,
    borderColor: MainTheme.colors.primary,
    borderWidth: 4,
    position: 'relative',
  },
  header: {
    width: '100%',
    height: '10%',
    padding: 16,
    backgroundColor: MainTheme.colors.primary,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    width: '80%',
    color: MainTheme.colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  text: {
    width: '100%',
    color: MainTheme.colors.white,
    fontSize: 14,
    fontWeight: 'regular',
    paddingHorizontal: 16,
  },
});