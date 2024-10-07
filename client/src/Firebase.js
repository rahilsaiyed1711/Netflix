import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";
const firebaseConfig = {
    apiKey: "AIzaSyD9iiS7kI4yeyUu-JK0KBSkBR8kfdqQnfs",
    authDomain: "webflix-f322a.firebaseapp.com",
    projectId: "webflix-f322a",
    storageBucket: "webflix-f322a.appspot.com",
    messagingSenderId: "857006678974",
    appId: "1:857006678974:web:c0d4551e874f6a0b5c0fef",
    measurementId: "G-S0EVQVJ6NH"
};

const app = initializeApp(firebaseConfig);


const auth = getAuth(app)
const db = getFirestore(app)


const signup = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
            password
        });
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1]);

    }
}



const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    }
    catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1]);
    }
}

const logout = async () => {
    signOut(auth);
}


export { auth, db, signup, login, logout }