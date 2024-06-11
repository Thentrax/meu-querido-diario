import React, { useEffect, useState } from 'react'; 
import { View, Text, ScrollView, Image } from 'react-native'; 
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
        <Text style={styles.text}>{memory.data.title}</Text>
        <Image source={{ uri: `data:image/png;base64,${memory.data.image.base64}` }} style={styles.image} />
        <Text style={styles.text2}>{memory.data.description}</Text>
      </ScrollView> 
    </View>
);
};

export default MemoryTab;