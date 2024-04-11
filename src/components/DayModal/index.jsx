import React, { useEffect } from 'react'; 
import { View, Button, Modal, Text, TouchableOpacity } from 'react-native'; 
import { styles } from './style';
import { ArrowArcLeft, X } from 'phosphor-react-native';
import Overview from './Tabs/Overview';
import MemoryForm from './Tabs/Form';
import MemoryTab from './Tabs/Memory';

const DayModal = ({
  isVisible,
  setIsVisible,
  selectedDate,
}) => {

  const [currentTab, setCurrentTab] = React.useState(0);
  const [selectedMemory, setSelectedMemory] = React.useState({});

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

  const onOverview = () => {
    setCurrentTab(0);
  };

  const onDetails = () => {
    setCurrentTab(2);
  };

  useEffect(() => {
    setCurrentTab(0);
  }, [selectedDate, isVisible]);

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
            {currentTab !== 0 && (
              <TouchableOpacity onPress={onOverview}>
                <ArrowArcLeft size={18} color="#fff"/>
              </TouchableOpacity>
            )}
            <Text style={styles.title}>Memórias do dia {date}</Text>
            <TouchableOpacity onPress={onClose}>
                <X size={18} color="#fff"/>
            </TouchableOpacity>
          </View>
          {currentTab === 0 && <Overview onCreate={onCreate} onDetails={onDetails} setSelectedMemory={setSelectedMemory}/>}
          {currentTab === 1 && <MemoryForm currentTab={currentTab} onOverview={onOverview}/>}
          {currentTab === 2 && <MemoryTab selectedMemory={selectedMemory}/>}
        </View>
      </View>
    </Modal>
  );
};

export default DayModal;