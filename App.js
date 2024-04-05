import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import MyCalendar from './src/components/MyCallendar/index';
import { MainTheme } from './src/theme/MainTheme';
import Header from './src/components/Header';

export default function App() {
  const userName = 'Thiago';
  return (
    <View style={styles.container}>
      <Header />
      <MyCalendar />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MainTheme.colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: MainTheme.fonts.primary,
  },
});
