import { collection, addDoc, getDocs } from "firebase/firestore"; 
import { db } from './config';

class Api {
  postMemory = async (memory) => {
    try {
      const docRef = await addDoc(collection(db, "memories"), {
        title: memory.title,
        date: memory.date,
        description: memory.description,
        image: memory.image,
        location: memory.location,
      });
      console.log("Memória Criada: ", docRef.id);
    } catch (e) {
      console.error("Erro ao criar memória: ", e);
    }
  };

  getMemories = async () => {
    try {
      const memories = await getDocs(collection(db, "memories"));
      return memories;
    } catch (e) {
      console.log("Erro ao consultar memórias");
    }

  };



};

const ApiInstance = new Api();
export default ApiInstance;