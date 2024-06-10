import React, { useState, useEffect } from 'react'; 
import { View, Text } from 'react-native'; 
import { Calendar, LocaleConfig, mark } from 'react-native-calendars'; 
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

const MyCalendar = ({memories, datesWithMemories}) => { 
  const today = new Date();
  const todayString = today.toISOString().split('T')[0];
  const [selectedDate, setSelectedDate] = useState(todayString);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDateMemories, setSelectedDateMemories] = useState();
  
  useEffect(() => {
    if (selectedDate && memories){
      getMemoriesWithDate();
    }
  }, [selectedDate]);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const formatDate = (memoryDate) => {
    const day = memoryDate.split('/');
    const formatedDate = `${day[2]}-${day[1]}-${day[0]}`;
    return formatedDate;
  }

  const getMemoriesWithDate = () => {
    const filteredMemories = memories.filter((memory) => formatDate(memory.data.date) === selectedDate)
    setSelectedDateMemories(filteredMemories);
  };

    return ( 
        <View style={styles.container}> 
          <View style={styles.calendarHeader}>
              <Text style={styles.calendarHeaderText}>Seu calendário de Memórias</Text>
          </View>
            <Calendar
              style={styles.calendar}
              markedDates={{
                [selectedDate]: {selected: true},
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
              memories={selectedDateMemories}
            />
        </View> 
    ); 
}; 

export default MyCalendar;