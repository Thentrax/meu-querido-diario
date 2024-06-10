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
  const [ datesWithMemories, setDatesWithMemories] = useState();

  useEffect(() => {
    fetchMemories();
  }, []);

  useEffect(() => {
    if (memories){
      getDatesWithMemories();
    }
  }, [memories]);


  const fetchMemories = async () => {
    try {
      const newMemories = await ApiInstance.getMemories();
      setMemories(newMemories);
    } catch (error) {
      console.error('Erro ao buscar as memórias:', error);
    }
  };

  const getDatesWithMemories = () => {
    const allDates = memories.map(memory => memory.data.date);
    const filteredDates = allDates.filter((currentValue, index, allDates) => {
      return allDates.slice(0, index).indexOf(currentValue) === -1;
    });

    setDatesWithMemories(filteredDates);
  };

  return ( 
    <View style={{ flex: 1 }}>
      <Header />
      <MyCalendar memories={memories} datesWithMemories={datesWithMemories}/>
      <Footer />
    </View> 
);
};

export default MainPage;