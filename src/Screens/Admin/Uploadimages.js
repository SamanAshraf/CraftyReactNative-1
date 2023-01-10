import { getStorage, ref, uploadBytes } from "firebase/storage"; 

export const uploadImage =async(filePath)=>{
    
    const response = await fetch(filePath);
    
    const blob = await response.blob();
    
    const fileName =filePath.substring(filePath.lastIndexOf('/')+1);
    
    const storage = getStorage();
    
    const storageRef = ref(storage, fileName);
    
    uploadBytes(storageRef, blob).then((snapshot) => {
      alert('Image Uploaded');
    });
  }
  