import React, {useState} from 'react'; 
import { View } from 'react-native'; 
import MainPage from './MainPage';
import Biometry from './Biometry';


const Router = () => {
  const [currentPage, setCurrentPage] = useState('0');
  return ( 
    <View style={{ flex: 1 }}>
      {currentPage === '0' && <Biometry setCurrentPage={setCurrentPage}/>}
      {currentPage === '1' && <MainPage setCurrentPage={setCurrentPage}/>}
    </View> 
);
};

export default Router;