import React, {useEffect, useState} from 'react'; 
import { View, Text, Button, TextInput } from 'react-native'; 
import * as LocalAuthentication from 'expo-local-authentication';
import { styles } from './style';
import { MainTheme } from '../../theme/MainTheme';
import ApiAuth from '../../firebase/auth';

const Biometry = ({
  navigation,
}
) => {
  const [biometricStatus, setBiometricStatus] = useState(null);
  const [mode, setMode] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const changeMode = (mode) => {
    resetFields()
    setMode(mode);
  }
  
  const resetFields = () => {
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  }

  const onEnter = async () => {
    try {
      if (mode === 'register' && validatePasswordMatch){
        await onRegister()
      }
      if (mode === 'login') {
        await onLogin();
      }
    } catch (e) {
      console.log('Erro ao autenticar:', e);
    } finally {
      await checkBiometric();
      resetFields();
      setMode('');
    }
  }

  const onRegister = async () => {
    const data = {
      email,
      password,
    };
    await ApiAuth.createUser(data);
  };

  const onLogin = async () => {
    const data = {
      email,
      password,
    };
    await ApiAuth.logInUser(data);
  };

  const validatePasswordMatch = () => {
    if (password === confirmPassword){
      return true
    }
    return false
  }

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
          navigateToMain();
        } else {
          setBiometricStatus(`Desboqueie seu diário com sua biometria.`);
        }
      }
    }
  };

  const navigateToMain = () => {
    navigation.navigate('calendar');
  }

  return ( 
    <View style={styles.container}>
      {mode === '' && (
        <View style={styles.form}>
        <Text style={styles.mainText}>Olá! Boas vindas.</Text>
        <Text style={styles.text}>Já possui uma conta ou deseja se registrar?</Text>
        <Button color={MainTheme.colors.secondary} title="Entrar" onPress={() => {onEnter('login')}} />
        <Button color={MainTheme.colors.secondary} title="Registrar" onPress={() => {changeMode('register')}} />
        </View>
      )}
      {mode === 'login' && (
        <View style={styles.form}>
        <Text style={styles.text2}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          />
        <Text style={styles.text2}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          />
        <Button color={MainTheme.colors.tertiary} title="Entrar" onPress={onEnter} />
        <Button color={MainTheme.colors.secondary} title="Não possui conta?" onPress={() => { changeMode('register'); } } />
        </View>
      )}
      {mode === 'register' && (
        <View style={styles.form}>
        <Text style={styles.text2}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          />
        <Text style={styles.text2}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          />
        <Text style={styles.text2}>Confirmar Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Confirmar Senha"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          />
        <Button color={MainTheme.colors.tertiary} title="Registrar" onPress={onEnter} />
        <Button color={MainTheme.colors.secondary} title="Já possui conta?" onPress={() => { changeMode('login'); } } />
        </View>
      )}
      {/* <Button color={MainTheme.colors.secondary} title="Ativar biometria" onPress={checkBiometric} /> */}
    </View> 
);
};

export default Biometry;