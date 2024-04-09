import React from 'react'; 
import { View } from 'react-native'; 
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MyCalendar from '../../components/MyCallendar';

const MainPage = ({
  setCurrentPage,
}) => {
  return ( 
    <View style={{ flex: 1 }}>
      <Header />
      <MyCalendar />
      <Footer />
    </View> 
);
};

export default MainPage;