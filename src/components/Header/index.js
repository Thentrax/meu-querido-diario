import React from 'react'; 
import { View, Text } from 'react-native'; 
import { styles } from './style';
import { Notebook } from 'phosphor-react-native';
import { MainTheme } from '../../theme/MainTheme';

const Header = () => {
  const userName = 'Thiago';
  return (
    <View style={styles.container}>
      <View style={styles.titleView}>
        <Text style={styles.title}>Meu querido Diário</Text>
        <Notebook size={32} color={MainTheme.colors.secondary} weight='fill'/>
      </View>
      <View style={styles.callView}>
        <Text style={styles.greetings}>Olá {userName}!</Text>
        <Text style={styles.call}>Gostaria de compartilhar uma nova experiência?</Text>
        <Text style={styles.text}>Selecione uma data para verificar suas experiências!</Text>
      </View>

    </View> 
);
};

export default Header;