import React, { useContext, useEffect } from 'react'; 
import { View, Text, Image, TouchableOpacity } from 'react-native'; 
import { styles } from './style';
import { MainTheme } from '../../theme/MainTheme';
import { Trash } from 'phosphor-react-native';
import ApiInstance from '../../firebase/api';
import MemoriesContext from '../../context/MemoryContext/context';

const MemoryCard = ({
  onDetails,
  setSelectedMemory,
}) => {
  const { selectedDateMemories, fetchMemories } = useContext(MemoriesContext);

  const onOpenMemory = (memory) => {
    setSelectedMemory(memory);
    onDetails();
  };

  const onDelete = async (id) => {
      await ApiInstance.deactivateMemoryEnabled(id);
      fetchMemories();
  };

  return (
    selectedDateMemories && selectedDateMemories.map((memory) => (
        <TouchableOpacity onPress={() => onOpenMemory(memory)} key={memory.id}>
          <View style={styles.container}>
            <Image source={{ uri: `data:image/png;base64,${memory.data.image.base64}` }} style={styles.image} />
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