import React from 'react'; 
import { View, Text, Image, TouchableOpacity } from 'react-native'; 
import { styles } from './style';
import { MainTheme } from '../../theme/MainTheme';
import { Pencil, Trash } from 'phosphor-react-native';

const MemoryCard = ({
  title,
}) => {

  const onEdit = () => {
    alert('editando');
  };

  const onDelete = () => {
      alert('deletando');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/favicon.png')}
        style={styles.icon}
      />
      <Text style={styles.text}>{title}</Text>
      <View style={styles.actions}>
      <TouchableOpacity onPress={onEdit}>
        <View>
          <Pencil size={24} color={MainTheme.colors.secondary} weight="fill" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={onDelete}>
        <View>
          <Trash size={24} color={MainTheme.colors.secondary} weight="fill" />
        </View>
      </TouchableOpacity>
      </View>
    </View> 
);
};

export default MemoryCard;