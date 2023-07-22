import React, { useState } from 'react'
import addImg from "../img/add-image.svg"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage } from "../firebase";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";


const Register = () => {

  const [err, setErr] = useState(false)

  const handleSubmit  = async (e)=>{
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];


    

    const storageRef = ref(storage, displayName);

    const uploadTask = uploadBytesResumable(storageRef, file);

    
   


    try {
      const res = await createUserWithEmailAndPassword(auth, email, password)
      uploadTask.on('state_changed', 
       
        (error) => {
          setErr(true)
        }, 
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
            await updateProfile( res.user,{
              displayName,
              photoURL:downloadURL
            })
          });
        }
      );
    } catch(err) {
      setErr(true)
    }
    

  }

  
  


  return (
    <div className='formContainer'>
        <div className="formWrapper">
            <span className='logo'>WeChat</span>
            <span className='title'>Register</span>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" placeholder='display name' />
                <input type="email" placeholder='email' />
                <input type="password" placeholder='password' />
                <input style={{display:"none"}} type="file" id='file' />
                <label htmlFor="file">
                    <img src={addImg} alt="" className='addImage' />
                    Add an avatar
                </label>
                <button>Sign up</button>
                {err && <span>Something went wrong</span>}
            </form>
            <p>You have an account? login</p>
        </div>
    </div>
  )
}

export default Register