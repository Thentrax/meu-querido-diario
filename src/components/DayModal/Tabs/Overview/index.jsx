import React from 'react'; 
import { ScrollView, View } from 'react-native'; 
import { Plus } from 'phosphor-react-native';
import { MainTheme } from '../../../../theme/MainTheme';
import MemoryCard from '../../../MemoryCard';
import FloatingButton from '../../../FloatingButton';
import { styles } from './style';

const Overview = () => {

  const title = 'Criando o aplicativo';

  return (
    <View style={styles.container}>
    <ScrollView style={styles.container}>
      <MemoryCard
        title={title}
      />
    </ScrollView> 
      <FloatingButton
        content={
          <Plus size={24} color={MainTheme.colors.white} />
        }
      />
    </View>
);
};

export default Overview;