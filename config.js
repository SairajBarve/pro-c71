  import firebase from 'firebase';

  
  var firebaseConfig = {
    apiKey: "AIzaSyAf5SJA-5pgk6MESTvsVthiygMnBptI57o",
    authDomain: "pro-c70-story-hub--1.firebaseapp.com",
    databaseURL: "https://pro-c70-story-hub--1-default-rtdb.firebaseio.com",
    projectId: "pro-c70-story-hub--1",
    storageBucket: "pro-c70-story-hub--1.appspot.com",
    messagingSenderId: "609584572417", 
    appId: "1:609584572417:web:7edfcfc9faae840dc8f800"
  };

  if(!firebase.apps.length)
{
firebase.initializeApp(firebaseConfig);
}
export default firebase.firestore();