import { StyleSheet, Dimensions } from 'react-native';
import { MainTheme } from '../../theme/MainTheme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  calendar: {
    width: Dimensions.get('window').width * 0.9,
    borderColor: MainTheme.colors.primary,
    borderWidth: 1,
    borderBottomEndRadius: 8,
    borderBottomStartRadius: 8,
  },
  calendarHeader: {
    width: Dimensions.get('window').width * 0.9,
    backgroundColor: MainTheme.colors.primary,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    borderTopEndRadius: 8,
    borderTopStartRadius: 8,
  },
  calendarHeaderText: {
    color: MainTheme.colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export const calendarTheme = {
  backgroundColor: MainTheme.colors.background, 
  calendarBackground: MainTheme.colors.background, 
  textSectionTitleColor: MainTheme.colors.textPrimay, 
  selectedDayBackgroundColor: MainTheme.colors.primary, 
  selectedDayTextPtextPrimayColor: MainTheme.colors.white, 
  todayTextColor: MainTheme.colors.secondary, 
  dayTextColor: MainTheme.colors.primary, 
  textDisabledColor: MainTheme.colors.disabled, 
  dotColor: MainTheme.colors.primary, 
  selectedDotColor: MainTheme.colors.white, 
  arrowColor: MainTheme.colors.primary, 
  monthTextColor: MainTheme.colors.primary, 
  indicatorColor: MainTheme.colors.primary, 
  textDayFontFamily: MainTheme.fonts.primary, 
  textMonthFontFamily: MainTheme.fonts.primary, 
  textDayHeaderFontFamily: MainTheme.fonts.primary, 
  textDayFontSize: 16, 
  textMonthFontSize: 16, 
  textDayHeaderFontSize: 14,
};