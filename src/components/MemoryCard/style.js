import { StyleSheet } from 'react-native';
import { MainTheme } from '../../theme/MainTheme';

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    padding: 8,
    backgroundColor: MainTheme.colors.background,
    borderColor: MainTheme.colors.primary,
    borderBottomColor: MainTheme.colors.primary,
    borderBottomWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
  },
  text: {
    color: MainTheme.colors.textPrimay,
    fontSize: 16,
    fontWeight: 'regular',
  },
  actions: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
  },

});