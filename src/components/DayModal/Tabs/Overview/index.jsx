import React from 'react'; 
import { ScrollView } from 'react-native'; 
import { styles } from './style';
import MemoryCard from '../../../MemoryCard';


const Overview = () => {
  return (
    <ScrollView style={styles.container}>
      <MemoryCard />
    </ScrollView> 
);
};

export default Overview;