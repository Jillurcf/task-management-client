import { createContext, useEffect, useState } from "react";
import app from "../firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, } from "firebase/auth";
const auth = getAuth(app)
import { GoogleAuthProvider } from "firebase/auth";
import axios from "axios";


const googleProvider = new GoogleAuthProvider();
export const AuthContext = createContext(auth)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    
    const signinwithGoogle = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password)=>{
        setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
    }
  

    const loggedOut = ()=>{
        setLoading(true)
      return signOut(auth)
    }

    // useEffect(()=>{
    //     const unsubsCribe = onAuthStateChanged(auth, currentUser =>{
    //         setUser(currentUser)
    //         setLoading(false)
    //     })
    //     return ()=>{
    //         unsubsCribe()
    //     }
    // },[])

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          const userEmail = currentUser?.email || user?.email;
          const loggedUser = { email: userEmail };
          setUser(currentUser);
          setLoading(false);
          console.log("current user", currentUser);
          if (currentUser) {
            axios.post("https://task-management-platform-server-iota.vercel.app/api/v1/jwt", loggedUser, {
                withCredentials: true
              })
              .then((res) => {
                console.log("token response", res.data);
              });
          } else {
            axios.post("https://task-management-platform-server-iota.vercel.app/api/v1/loggedOut", loggedUser, {withCredentials: true})
            .then(res => {
              console.log(res.data);
            })
            
          }
        });
        return () => {
          return unsubscribe();
        };
      }, []);
    

    const userInfo = {
        user,
        loading,
        createUser,
        signIn,
        loggedOut,
        signinwithGoogle,
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;