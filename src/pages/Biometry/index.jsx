import React from 'react'; 
import { View, Text } from 'react-native'; 
import { styles } from './style';

const Biometry = (
  setCurrentPage,
) => {
  const userName = 'Thiago';
  return ( 
    <View style={styles.container}>
      <Text style={styles.mainText}>{userName}, é você mesmo?</Text>
      <Text style={styles.text}>Desboqueie seu diário com sua biometria</Text>
    </View> 
);
};

export default Biometry;