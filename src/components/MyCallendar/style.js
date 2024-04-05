import { StyleSheet } from 'react-native';
import { MainTheme } from '../../theme/MainTheme';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: MainTheme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: MainTheme.colors.primary,
    borderWidth: 1,
    borderRadius: 4,
  },
});

export const calendarTheme = {
  backgroundColor: MainTheme.colors.background, 
  calendarBackground: MainTheme.colors.background, 
  textSectionTitleColor: MainTheme.colors.textPrimay, 
  selectedDayBackgroundColor: MainTheme.colors.primary, 
  selectedDayTextPtextPrimayColor: MainTheme.colors.white, 
  todayTextColor: MainTheme.colors.primary, 
  dayTextColor: MainTheme.colors.textSecondary, 
  textDisabledColor: MainTheme.colors.disabled, 
  dotColor: MainTheme.colors.primary, 
  selectedDotColor: MainTheme.colors.white, 
  arrowColor: MainTheme.colors.primary, 
  monthTextColor: MainTheme.colors.primary, 
  indicatorColor: MainTheme.colors.primary, 
  textDayFontFamily: MainTheme.fonts.primary, 
  textMonthFontFamily: MainTheme.fonts.primary, 
  textDayHeaderFontFamily: MainTheme.fonts.primary, 
  textDayFontSize: 14, 
  textMonthFontSize: 16, 
  textDayHeaderFontSize: 14 
};