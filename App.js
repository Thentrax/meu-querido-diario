import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';
import MyCalendar from './src/components/MyCallendar/index';
import { MainTheme } from './src/theme/MainTheme';
import Header from './src/components/Header';
import Footer from './src/components/Footer';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <MyCalendar />
      <Footer />
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
