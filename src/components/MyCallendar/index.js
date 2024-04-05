import React, { useState } from 'react'; 
import { View, Text } from 'react-native'; 
import { Calendar, LocaleConfig } from 'react-native-calendars'; 
import { styles, calendarTheme } from './style';

LocaleConfig.locales['br'] = {
  monthNames: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Septembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ],
  monthNamesShort: ['Jav', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  dayNames: ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'],
  dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
  today: "Hoje"
};
LocaleConfig.defaultLocale = 'br';

const MyCalendar = () => { 
  const today = new Date();
  const todayString = today.toISOString().split('T')[0];
  const [selectedDate, setSelectedDate] = useState(todayString);
    return ( 
        <View style={styles.container}> 
            <Calendar 
                markedDates={{ 
                  [selectedDate]: { selected: true }
                }}
                onDayPress={(day) => {
                  if (day.dateString === selectedDate) {
                    alert('You have already selected this date!');
                    return;
                  }
                  setSelectedDate(day.dateString);
                }}
                theme={calendarTheme} 
            /> 
        </View> 
    ); 
}; 

export default MyCalendar;