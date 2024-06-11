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
        <Notebook size={32} color={MainTheme.colors.tertiary} weight='fill'/>
      </View>
    </View> 
);
};

export default Header;