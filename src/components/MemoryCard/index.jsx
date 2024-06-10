import React, { useEffect } from 'react'; 
import { View, Text, Image, TouchableOpacity } from 'react-native'; 
import { styles } from './style';
import { MainTheme } from '../../theme/MainTheme';
import { Trash } from 'phosphor-react-native';

const MemoryCard = ({
  onDetails,
  setSelectedMemory,
  memories,
}) => {

  const onOpenMemory = (memory) => {
    setSelectedMemory(memory);
    onDetails();
  };

  const onDelete = (id) => {
      console.log('deletando', id);
  };

  return (
    memories && memories.map((memory) => (
        <TouchableOpacity onPress={() => onOpenMemory(memory)} key={memory.id}>
          <View style={styles.container}>
            <Image source={{ uri: memory.data.image }} style={styles.image} />
            <Text style={styles.text}>{memory.data.title}</Text>
            <View style={styles.actions}>
              <TouchableOpacity onPress={() => onDelete(memory.id)}>
                <View>
                  <Trash size={24} color={MainTheme.colors.secondary} weight="fill" />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      ))
  );
};

export default MemoryCard;