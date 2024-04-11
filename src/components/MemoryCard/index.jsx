import React, { useEffect } from 'react'; 
import { View, Text, Image, TouchableOpacity } from 'react-native'; 
import { styles } from './style';
import { MainTheme } from '../../theme/MainTheme';
import { Pencil, Trash } from 'phosphor-react-native';

const MemoryCard = ({
  onDetails,
  setSelectedMemory,
}) => {

  const memory = {
    title: 'Criando o aplicativo',
    description: 'Descrição da memória',
    image: require('../../../assets/favicon.png'),
    location: 'Localização da memória',
  }

  const onOpenMemory = () => {
    setSelectedMemory(memory);
    onDetails();
  };

  const onDelete = () => {
      alert('deletando');
  };

  return (
    <TouchableOpacity onPress={onOpenMemory}>
      <View style={styles.container}>
        <Image
          source={memory.image}
        />
        <Text style={styles.text}>{memory.title}</Text>
        <View style={styles.actions}>
        <TouchableOpacity onPress={onDelete}>
          <View>
            <Trash size={24} color={MainTheme.colors.secondary} weight="fill" />
          </View>
        </TouchableOpacity>
        </View>
      </View> 
    </TouchableOpacity>

);
};

export default MemoryCard;