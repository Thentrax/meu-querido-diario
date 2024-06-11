import React from 'react'; 
import { ScrollView, View } from 'react-native'; 
import { Plus } from 'phosphor-react-native';
import { MainTheme } from '../../../../theme/MainTheme';
import MemoryCard from '../../../MemoryCard';
import FloatingButton from '../../../FloatingButton';
import { styles } from './style';

const Overview = ({
  onCreate,
  onDetails,
  setSelectedMemory,
}) => {

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        <MemoryCard
          onDetails={onDetails}
          setSelectedMemory={setSelectedMemory}
        />
      </ScrollView> 
        <FloatingButton
          content={<Plus size={24} color={MainTheme.colors.white} />}
          action={onCreate}
        />
    </View>
);
};

export default Overview;