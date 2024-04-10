import React from 'react'; 
import { View, Button, Modal, Text, TouchableOpacity } from 'react-native'; 
import { styles } from './style';
import { X } from 'phosphor-react-native';
import Overview from './Tabs/Overview';
import MemoryForm from './Tabs/Form';

const DayModal = ({
  isVisible,
  setIsVisible,
  selectedDate,
}) => {

  const [currentTab, setCurrentTab] = React.useState(0);

  const formatDate = (date) => {
    const dateObj = new Date(date);
    return dateObj.toLocaleDateString('pt-BR');
  };

  let date = formatDate(selectedDate);

  const onClose = () => {
    setIsVisible(!isVisible);
  };

  const onCreate = () => {
    setCurrentTab(1);
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
          {currentTab === 0 && <Overview onCreate={onCreate}/>}
          {currentTab === 1 && <MemoryForm />}
        </View>
      </View>
    </Modal>
  );
};

export default DayModal;