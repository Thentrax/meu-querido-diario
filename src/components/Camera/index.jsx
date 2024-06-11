import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import * as MediaLibrary from 'expo-media-library';
import { Camera } from 'expo-camera';
import { ArrowArcLeft, ArrowUpLeft, Camera as CameraIcon, CameraRotate } from 'phosphor-react-native';
import { styles } from './style';

const CameraScreen = ({
  setIsOpen,
  setPicture,
}) => {
  const ref = useRef(null);
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [captured, setCaptured] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>Libere o uso da câmera</Text>;
  }

  async function take() {
    if (ref) {
      const data = await ref.current.takePictureAsync();
      setCaptured(data.uri)
      const asset = await MediaLibrary.createAssetAsync(data.uri)
      setPicture(asset.uri)
      setIsOpen(false)
    }
  }

  return (
    <View style={styles.container}>
       <Camera style={styles.camera} type={type} ref={ref}>
        <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonReturn}
            onPress={()=> {setIsOpen(false)}}>
              <ArrowArcLeft size={'80%'} color="#000" weight='fill'/>
        </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonFlip}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <CameraRotate size={'80%'} color="#000" weight='fill'/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonTake} onPress={take}>
            <CameraIcon size={'80%'} color="#000" weight='fill'/>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
};

export default CameraScreen;