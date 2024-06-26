import React, { useContext, useEffect, useState } from 'react'; 
import { TextInput, View, Button, Text, Image, ScrollView } from 'react-native'; 
import { styles } from './style';
import { MainTheme } from '../../../../theme/MainTheme';
import CameraScreen from '../../../Camera';
import MapScreen from '../../../Map';
import ApiInstance from '../../../../firebase/api';
import MemoriesContext from '../../../../context/MemoryContext/context';

const MemoryForm = ({
  currentTab,
  onOverview,
  date,
}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [location, setLocation] = useState('');
  const [openCamera, setOpenCamera] = useState(false);
  const [openMap, setOpenMap] = useState(false);
  const { fetchMemories } = useContext(MemoriesContext);

  const handleImageSelect = () => {
    setOpenCamera(true);
  };

  const handleLocationSelect = () => {
    setOpenMap(true);
  };

  const handleSubmit = async () => {
    await postMemory();
    onOverview();
  };

  const postMemory = async () => {
    const newMemory = {
      title,
      description,
      image,
      location,
      date,
    }
    await ApiInstance.postMemory(newMemory);
    await fetchMemories();
  }

  const clearForm = () => {
    setTitle('');
    setDescription('');
    setImage('');
    setLocation('');
  };

  useEffect(() => {
    clearForm();
  }, [currentTab]);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.form}>
        <Text style={styles.text}>Criar nova memória</Text>
        
        <Text style={styles.text2}>Título</Text>
        <TextInput
          style={styles.input}
          placeholder="Título"
          value={title}
          onChangeText={setTitle}
        />

        <Text style={styles.text2}>Descrição</Text>
        <TextInput
          style={styles.textArea}
          placeholder="Descrição"
          value={description}
          onChangeText={setDescription}
          multiline
        />
        <Text style={styles.text2}>Foto</Text>
        <Button title="Tirar Foto" onPress={handleImageSelect} color={MainTheme.colors.secondary}/>
        {image && <Image source={{ uri: image.uri }} style={styles.image} />}
        <Text style={styles.text2}>Localização</Text>
        <Button title="Selecionar Localização" onPress={handleLocationSelect} color={MainTheme.colors.secondary}/>
        {location && <Text>{JSON.stringify(location)}</Text>}
        <Button title="Enviar" onPress={handleSubmit} color={MainTheme.colors.tertiary}/>
        </View>
      </ScrollView>
      { openCamera && (<CameraScreen setIsOpen={setOpenCamera} setPicture={setImage}/>) }     
      { openMap && (<MapScreen setIsOpen={setOpenMap} setCurrentLocation={setLocation}/>) }     
    </View>
);
};

export default MemoryForm;