import React, { useState, useEffect } from 'react'; 
import { View } from 'react-native'; 
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MyCalendar from '../../components/MyCallendar';
import ApiInstance from '../../firebase/api';

const MainPage = ({
  setCurrentPage,
}) => {
  const [ memories, setMemories] = useState();

  useEffect(() => {
    fetchMemories();
  }, [])

  useEffect(() => {
    if (memories){
      console.log('memórias adicionadas!:', memories)
    }
  }, [memories])
  
  

  const fetchMemories = async () => {
    try {
      const newMemories = await ApiInstance.getMemories();
      setMemories(newMemories);
    } catch (error) {
      console.error('Erro ao buscar as memórias:', error);
    }
  };

  return ( 
    <View style={{ flex: 1 }}>
      <Header />
      <MyCalendar />
      <Footer />
    </View> 
);
};

export default MainPage;