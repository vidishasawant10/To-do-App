import firebase from "firebase";
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBgpwU5uoFCEENnx8mHdWm6S7bqsXWBpH4",
    authDomain: "todoapp-d708f.firebaseapp.com",
    projectId: "todoapp-d708f",
    storageBucket: "todoapp-d708f.appspot.com",
    messagingSenderId: "188799034186",
    appId: "1:188799034186:web:c1390a3f02c8d783d5d7b3"
  };

class Fire{
    constructor(callback){
        this.init(callback)
    }
    init(){
        if(!firebase.apps.length){
            firebase.initializeApp(firebaseConfig)
        }

        firebase.auth().onAuthStateChanged(
            user =>{
                if(user) {

                }else{
                    firebase.auth()
                    .signInAnonymously()
                    .catch(error => {});
                }
            }
        )
    }
}
export default Fire;
