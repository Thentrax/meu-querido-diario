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
  titleView: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: MainTheme.colors.white,
    fontSize: 32,
    fontWeight: 'bold',
    paddingHorizontal: 16,
  },
  greetings: {
    width: '100%',
    color: MainTheme.colors.white,
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 16,
  },
  callView: {
    width: '100%',
  },
  call: {
    width: '100%',
    color: MainTheme.colors.white,
    fontSize: 16,
    fontWeight: 'regular',
    paddingHorizontal: 16,
  },
  text: {
    width: '100%',
    color: MainTheme.colors.white,
    fontSize: 14,
    fontWeight: 'regular',
    paddingHorizontal: 16,
  }
});