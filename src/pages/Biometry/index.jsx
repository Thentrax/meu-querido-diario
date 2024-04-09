import React, {useEffect, useState} from 'react'; 
import { View, Text } from 'react-native'; 
import * as LocalAuthentication from 'expo-local-authentication';
import { styles } from './style';

const Biometry = ({
  setCurrentPage,
}
) => {
  const userName = 'Thiago';
  const [biometricStatus, setBiometricStatus] = useState(null);

  useEffect(() => {
    checkBiometric();
  }, []);

  const checkBiometric = async () => {
    const isBiometricAvailable = await LocalAuthentication.hasHardwareAsync();
    if (!isBiometricAvailable) {
      setBiometricStatus('Biometria não suportada neste dispositivo.');
    } else {
      const biometricRecords = await LocalAuthentication.isEnrolledAsync();
      if (!biometricRecords) {
        setBiometricStatus('Você não tem biometrias cadastradas, é necessário cadastrar para manter sua privacidade no app.');
      } else {
        const result = await LocalAuthentication.authenticateAsync();
        if (result.success) {
          setBiometricStatus('Autenticado com sucesso!');
          setCurrentPage('1');
        } else {
          setBiometricStatus(`Desboqueie seu diário com sua biometria.`);
        }
      }
    }
  };

  return ( 
    <View style={styles.container}>
      <Text style={styles.mainText}>{userName}, é você mesmo?</Text>
      <Text style={styles.text}>{biometricStatus}</Text>
    </View> 
);
};

export default Biometry;