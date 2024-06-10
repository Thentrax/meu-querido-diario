import { collection, addDoc, getDocs, query, where } from "firebase/firestore"; 
import { ref } from "firebase/storage";
import { db, storage } from './config';

class Api {
  postMemory = async (memory) => {
    try {
      await addDoc(collection(db, "memories"), {
        title: memory.title,
        date: memory.date,
        description: memory.description,
        image: memory.image,
        location: memory.location,
        enabled: true,
      });
    } catch (e) {
      console.error("Erro ao criar memória: ", e);
    }
  };

  getMemories = async () => {
    try {
      const reqiestQuery = query(
        collection(db, "memories"), where("enabled", "==", true)
      );

      const fetchedMemories = await getDocs(reqiestQuery);
      const memories = [];
      
      fetchedMemories.forEach((doc) => {
        memory = {
          "id": doc.id,
          "data": doc.data(),
        };
        memories.push(memory);
      });
      return memories;
    } catch (e) {
      console.error("Erro ao consultar memórias", e);
    }
  };
};

const ApiInstance = new Api();
export default ApiInstance;