import React, { useState, useEffect, useContext } from 'react'; 
import { View, Text } from 'react-native'; 
import { Calendar, LocaleConfig, mark } from 'react-native-calendars'; 
import { styles, calendarTheme } from './style';
import DayModal from '../DayModal';
import MemoriesContext from '../../context/MemoryContext/context';

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
  const [modalVisible, setModalVisible] = useState(false);
  const { getMemoriesWithDate, memories, selectedDate, setSelectedDate } = useContext(MemoriesContext);
  
  useEffect(() => {
    if (selectedDate && memories){
      getMemoriesWithDate();
    }
  }, [selectedDate]);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

    return ( 
        <View style={styles.container}> 
          <View style={styles.callView}>
            <Text style={styles.greetings}>Olá!</Text>
            <Text style={styles.call}>Gostaria de compartilhar uma nova memórias?</Text>
            <Text style={styles.text}>Selecione uma data para verificar suas memórias!</Text>
          </View>

          <View>
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
          </View>
            <DayModal
              isVisible={modalVisible}
              setIsVisible={setModalVisible}
              selectedDate={selectedDate}
            />
        </View> 
    ); 
}; 

export default MyCalendar;