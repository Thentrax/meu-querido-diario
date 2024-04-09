import React from 'react'; 
import { View, Text, Modal } from 'react-native'; 

const Footer = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Mostrar Modal" onPress={() => setModalVisible(true)} />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <View style={{ backgroundColor: 'white', padding: 20 }}>
            <Text>Conteúdo da modal aqui</Text>
            <Button title="Fechar Modal" onPress={() => setModalVisible(!modalVisible)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Footer;