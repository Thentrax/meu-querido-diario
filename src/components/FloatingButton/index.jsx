import React, { useEffect, useState } from 'react'; 
import { TouchableOpacity, View } from 'react-native'; 
import { styles } from './style';

const FloatingButton = ({
  content,
  action,
}) => {

  const onCreate = () => {
    action();
  };


  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onCreate}>
              {content}
      </TouchableOpacity>
    </View> 
);
};

export default FloatingButton;