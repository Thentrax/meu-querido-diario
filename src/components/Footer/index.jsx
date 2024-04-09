import React from 'react'; 
import { View, Text } from 'react-native'; 
import { styles } from './style';

const Footer = () => {
  return ( 
    <View style={styles.container}>
        <Text style={styles.text}>Desenvolvido por: Thiago Cardoso & João Oliveira ₢</Text>
    </View> 
);
};

export default Footer;