import React from 'react'; 
import { View, Button, Modal, Text, TouchableOpacity } from 'react-native'; 
import { styles } from './style';
import { X } from 'phosphor-react-native';
import Overview from './Tabs/Overview';

const DayModal = ({
  isVisible,
  setIsVisible,
  selectedDate,
}) => {

  const formatDate = (date) => {
    const dateObj = new Date(date);
    return dateObj.toLocaleDateString('pt-BR');
  };

  let date = formatDate(selectedDate);

  const onClose = () => {
    setIsVisible(!isVisible);
  };


  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>Memórias do dia {date}</Text>
            <TouchableOpacity onPress={onClose}>
              <View>
                <X size={18} color="#fff"/>
              </View>
            </TouchableOpacity>
          </View>
          <Overview />
        </View>
      </View>
    </Modal>
  );
};

export default DayModal;