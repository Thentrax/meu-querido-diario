import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  doc,
  updateDoc
} from "firebase/firestore"; 
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

  deactivateMemoryEnabled = async (memoryId) => {
    try {
      const memoryRef = doc(collection(db, "memories"), memoryId);
      await updateDoc(memoryRef, {
        enabled: false,
      });
      console.log(`Memória removida com sucesso.`);
    } catch (e) {
      console.error("Error updating memory enabled state:", e);
    }
  };
};

const ApiInstance = new Api();
export default ApiInstance;