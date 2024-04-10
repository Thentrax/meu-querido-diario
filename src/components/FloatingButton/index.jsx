import React from 'react'; 
import { View } from 'react-native'; 
import { styles } from './style';

const FloatingButton = ({
  content,
}) => {

  return (
    <View style={styles.container}>
      {content}
    </View> 
);
};

export default FloatingButton;