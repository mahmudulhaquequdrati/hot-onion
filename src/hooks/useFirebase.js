import { useEffect, useState } from "react";
import initializeFirebase from "../components/Firebase/Firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

initializeFirebase();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const auth = getAuth();

  const registerUser = (email, password, history) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        history.replace("/");
        setSuccess(true);
        setError("");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        setSuccess(false);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const loginUser = (email, password, location, history) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || "/";
        history.replace(destination);
        setError("");
        setSuccess(true);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        setSuccess(false);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const logOut = () => {
    // setLoading(true);
    signOut(auth)
      .then(() => {
        //logout
      })
      .catch((error) => {
        // no error
      });
  };
  // obserbe the user
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setLoading(false);
    });
  }, [auth]);
  return {
    user,
    loading,
    registerUser,
    loginUser,
    error,
    success,
    logOut,
  };
};
export default useFirebase;
