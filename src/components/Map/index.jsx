import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import * as Location from 'expo-location';
import { styles } from './style';
import { ArrowArcLeft, Check } from 'phosphor-react-native';

const MapScreen = ({
  setIsOpen,
  setCurrentLocation,
}) => {
  
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permissão da localização negada!');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location.coords);
    })();
  }, []);

  let text = 'Aguarde...';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  const handleConfirm = () => {
    setCurrentLocation(location);
    setIsOpen(false);
  };

  return (
    <View style={styles.container}>
      <MapView loadingEnabled={true}
        region={
          !location ?
            {
              latitude: 0,
              longitude: 0,
              latitudeDelta: 0,
              longitudeDelta: 1000,
            } :
            {
              latitude: location.latitude,
              longitude: location.longitude,
              latitudeDelta: 0.005,
              longitudeDelta: 0.005,
            }
        }
        style={styles.map}
      >
        <Marker coordinate={
           !location ?
           {
             latitude: 0,
             longitude: 0,
             latitudeDelta: 0,
             longitudeDelta: 1000,
           } :
           {
             latitude: location.latitude,
             longitude: location.longitude,
             latitudeDelta: 0.005,
             longitudeDelta: 0.005,
           }
        }
        title="Voce está aqui"
        description='Local da sua nova memória.'
        />
      </MapView>
      <TouchableOpacity style={styles.buttonReturn} onPress={()=> {setIsOpen(false)}}>
        <ArrowArcLeft size={'80%'} color="#000" weight='fill'/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonConfirm} onPress={handleConfirm}>
        <Check size={'80%'} color="#000"/>
      </TouchableOpacity>
    </View>
  );
};

export default MapScreen;