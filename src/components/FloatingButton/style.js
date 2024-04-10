import { StyleSheet } from 'react-native';
import { MainTheme } from '../../theme/MainTheme';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    right: 8,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: MainTheme.colors.primary,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

});