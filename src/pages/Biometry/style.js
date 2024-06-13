import { StyleSheet, Dimensions } from 'react-native';
import { MainTheme } from '../../theme/MainTheme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 8,
    backgroundColor: MainTheme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: MainTheme.colors.primary,
    borderWidth: 1,
    paddingVertical: Dimensions.get('window').width * 0.7,

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
  },
  text2: {
    fontSize: 16,
    color: MainTheme.colors.white,
    marginBottom: 10,
  },
  textSecondary: {
    width: '100%',
    color: MainTheme.colors.secondary,
    fontSize: 14,
    fontWeight: 'regular',
    paddingHorizontal: 16,
  },
  form: {
    display: 'flex',
    flex: 1,
    width: '100%',
    height: '100%',
    gap: 8,
    padding: 16,
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '100%',
    backgroundColor: MainTheme.colors.white
  },
});