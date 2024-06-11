import { createContext, useContext} from 'react';

export const MemoriesContext = createContext(undefined);

export const useMemories = () => {
  const context = useContext(MemoriesContext);
  if (!context){
    throw new Error('Erro ao criar contexto');
  }
  return context;
}


export default MemoriesContext;