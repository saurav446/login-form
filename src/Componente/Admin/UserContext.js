import React, {   createContext, useContext, useEffect, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebaseConfig"; 
import { Redirect, Route, useHistory } from 'react-router';
firebase.initializeApp(firebaseConfig);

   const UserContext = createContext()
  
 export  const AuthProviderUser = (props) =>{
      const auth = Auth();
    return  <UserContext.Provider value={auth}>{props.children}</UserContext.Provider>
   }
 export const useAuth = () =>  useContext(UserContext);
   
   const getUser = user =>{
    const {displayName,email,photoURL} =  user; 
    return   {
      name:displayName,
      email:email,
      photo:photoURL,  
    }
   }


 export function PRoute({ children, ...rest }) {
  const auth = useAuth();
  return (
    
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/Login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

const Auth = () => { 
  const [user,setUser] = useState({
     isSignIN:false,
     name:'',
     email:'',
     photo:'',
     error:'',
     isValid:false
  }) 
  
  var provider = new firebase.auth.GoogleAuthProvider();
     
  const isSignInGoogle = () =>{
    firebase.auth()
    .signInWithPopup(provider)
    .then((res) => { 
      const isSignIns =  res.user;
      isSignIns.isSignIN = true;
      setUser(isSignIns)
       window.location.pathname = '/desh'
    }) 
    
   
  }
  const isSignINOutGoogl = () =>{
    firebase.auth().signOut().then(() => {
      const isSignOuts = {
        isSignIN:false,
        name:'',
        email:'',
        photo:'',
        error:''
      }
      setUser(isSignOuts)
      window.location.pathname = '/Login'
    }) 
  }
 
   useEffect(() => {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        const setUsers = getUser();
        setUser(setUsers);
      }  
    });
    
   },[])


   const heandleChange = (e) => {
     const NewUserInfo = {
      ...user
     }

     let isValid = true;
     if(e.target.name === "password"){
       isValid = e.target.value.length < 8;
       isValid = 'invalod'
     }
     NewUserInfo[e.target.name] = e.target.value;
     NewUserInfo.isValid = isValid;
     setUser(NewUserInfo)  
     console.log(isValid)
   }
 
   const createAccount = (e ) => {
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .then((res) => {
      const createdUser = getUser(res.user);
      createdUser.isSignIN = true; 
      setUser(createdUser);
    })
    .catch((err) => {
      console.log(err) 
    });
  
    window.location.pathname = '/desh'
  e.preventDefault();
  e.target.reset();
   }
   const Login = (e) =>{
    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
   .then((res) => {
     const  savePassword =  getUser(res.user);
     savePassword.isSignIn = true;
     setUser(savePassword);
   })
    e.preventDefault();
    e.target.reset();
  }

  return{ 
    user,   
    createAccount,
    isSignInGoogle,
    isSignINOutGoogl,
    heandleChange,
    Login
  }
    
}

export default Auth;