import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import initializeAuthentication from "../Pages/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = (location, history) => {
        const loading = toast.loading('Please wait...');
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then(() => {
                toast.dismiss(loading);
                history.replace(location.state?.from || '/');
            })
            .catch(error => {
                toast.dismiss(loading);
                toast.error(error.message)
            })
            .finally(() => setIsLoading(false))
    }

    const registerNewUser = (name, email, password, location, history) => {
        setIsLoading(true);
        const loading = toast.loading('Please wait...');
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                toast.dismiss(loading);
                const photo = 'https://i.ibb.co/SP5W5vn/user.png'
                const newUser = { displayName: name, email, photoURL: photo }
                // send data to firebase
                setUser(newUser);
                setUserName(name, photo);
                history.replace(location.state?.from || '/');
            })
            .catch(error => {
                toast.dismiss(loading);
                toast.error(error.message)
            })
            .finally(() => setIsLoading(false))
    }

    const setUserName = (name, photo) => {
        updateProfile(auth.currentUser, { displayName: name, photoURL: photo })
            .then(() => {

            });
    }

    const handleUserLogin = (email, password, location, history) => {
        const loading = toast.loading('Please wait...');
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                toast.dismiss(loading);
                history.replace(location.state?.from || '/');
            })
            .catch(error => {
                toast.dismiss(loading);
                toast.error(error.message)
            })
            .finally(() => setIsLoading(false))
    }

    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => { }).finally(() => setIsLoading(false));
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        })
        return unsubscribe;
    }, [auth])

    return {
        user,
        isLoading,
        signInUsingGoogle,
        logOut,
        registerNewUser,
        handleUserLogin,
    }
};

export default useFirebase;