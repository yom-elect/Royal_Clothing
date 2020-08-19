import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBkYcrGrIG0_OzSMr-3PYOhDX_vBdmThmA",
  authDomain: "social-app-ac019.firebaseapp.com",
  databaseURL: "https://social-app-ac019.firebaseio.com",
  projectId: "social-app-ac019",
  storageBucket: "social-app-ac019.appspot.com",
  messagingSenderId: "1021362559615",
  appId: "1:1021362559615:web:78efaba866f8791e083d4a",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log("error saving user record");
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
