import React, { useEffect, useState } from 'react'; 
import { View, Text, ScrollView } from 'react-native'; 
import { styles } from './style';
import MapScreen from '../../../Map';

const MemoryTab = ({
  selectedMemory,
}) => {

  const [memory, setMemory] = useState(selectedMemory);

  useEffect(() => {
    setMemory(selectedMemory);
  }, [selectedMemory]);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.text}>{memory.title}</Text>
        {/* <Image source={memory.image} style={styles.image} /> */}
        <Text style={styles.text2}>{memory.description}</Text>
        <Text style={styles.text2}>{memory.location}</Text>
      </ScrollView> 
    </View>
);
};

export default MemoryTab;