import React from 'react'; 
import { View, Text } from 'react-native'; 

const Header = () => {
  const userName = 'Thiago';
  return ( 
    <View>
        <Text>Olá {userName}! Gostaria de compartilhar uma nova experiência?</Text>
    </View> 
);
};

export default Header;