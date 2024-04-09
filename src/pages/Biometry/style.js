import { StyleSheet } from 'react-native';
import { MainTheme } from '../../theme/MainTheme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 24,
    gap: 8,
    backgroundColor: MainTheme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: MainTheme.colors.primary,
    borderWidth: 1,
  },
  mainText: {
    width: '100%',
    color: MainTheme.colors.white,
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 16,
  },
  text: {
    width: '100%',
    color: MainTheme.colors.white,
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 16,
  }
});