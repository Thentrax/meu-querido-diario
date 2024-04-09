import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';
import { MainTheme } from './src/theme/MainTheme';
import Router from './src/pages/router';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Router />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MainTheme.colors.background,
    fontFamily: MainTheme.fonts.primary,
  },
});
