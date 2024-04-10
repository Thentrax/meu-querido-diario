import React, { useState } from 'react'; 
import { View, Text } from 'react-native'; 
import { Calendar, LocaleConfig } from 'react-native-calendars'; 
import { styles, calendarTheme } from './style';
import DayModal from '../DayModal';

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
  const [modalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

    return ( 
        <View style={styles.container}> 
          <View style={styles.calendarHeader}>
              <Text style={styles.calendarHeaderText}>Seu calendário de Experiências</Text>
          </View>
            <Calendar
              style={styles.calendar}
              markedDates={{ 
                [selectedDate]: { selected: true }
              }}
              onDayPress={(day) => {
                if (day.dateString === selectedDate) {
                  handleOpenModal();
                  return;
                }
                setSelectedDate(day.dateString);
              }}
              theme={calendarTheme} 
            />
            <DayModal
              isVisible={modalVisible}
              setIsVisible={setModalVisible}
              selectedDate={selectedDate}
            />
        </View> 
    ); 
}; 

export default MyCalendar;