import { useEffect, useState } from 'react';
import { MemoriesContext } from './context';
import ApiInstance from '../../firebase/api';

export const MemoriesProvider = ({
  children
}) => {
  const [memories, setMemories] = useState();
  const [selectedDateMemories, setSelectedDateMemories] = useState();

  const today = new Date();
  const todayString = today.toISOString().split('T')[0];
  const [selectedDate, setSelectedDate] = useState(todayString);

  useEffect(() => {
    fetchMemories();
  }, [])

  useEffect(() => {
    if (selectedDate && memories){
      getMemoriesWithDate();
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

  const formatDate = (memoryDate) => {
    const day = memoryDate.split('/');
    const formatedDate = `${day[2]}-${day[1]}-${day[0]}`;
    return formatedDate;
  }

  const getMemoriesWithDate = () => {
    const filteredMemories = memories.filter((memory) => formatDate(memory.data.date) === selectedDate)
    setSelectedDateMemories(filteredMemories);
  };

  const value = {
    memories,
    fetchMemories,
    selectedDateMemories,
    getMemoriesWithDate,
    selectedDate,
    setSelectedDate,
  }

  return (
    <MemoriesContext.Provider value={value}>
      {children}
    </MemoriesContext.Provider>
  );
};