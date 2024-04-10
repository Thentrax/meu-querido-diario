import { StyleSheet } from 'react-native';
import { MainTheme } from '../../../../theme/MainTheme';

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: '90%',
  },
  scroll: {
    display: 'flex',
    gap: 8,
    backgroundColor: MainTheme.colors.background,
    borderColor: MainTheme.colors.primary,
  },
  header: {
    width: '100%',
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