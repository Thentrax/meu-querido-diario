import { StyleSheet } from 'react-native';
import { MainTheme } from '../../theme/MainTheme';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    gap: 8,
    backgroundColor: MainTheme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: MainTheme.colors.primary,
    borderWidth: 1,
  },
  text: {
    width: '100%',
    color: MainTheme.colors.white,
    fontSize: 14,
    fontWeight: 'regular',
    paddingHorizontal: 16,
  }
});