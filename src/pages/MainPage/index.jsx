import React, { useState, useEffect } from 'react'; 
import { View } from 'react-native'; 
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MyCalendar from '../../components/MyCallendar';
import { MemoriesProvider } from '../../context/MemoryContext/provider';
import { SafeAreaView } from 'react-native-web';

const MainPage = ({
  setCurrentPage,
}) => {

  return ( 
    <MemoriesProvider>
      <View style={{ flex: 1 }}>
        <Header />
        <MyCalendar/>
        <Footer />
      </View> 
    </MemoriesProvider>
);
};

export default MainPage;