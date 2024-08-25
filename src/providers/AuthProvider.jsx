import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Google Provider
    const googleProvider = new GoogleAuthProvider();

    // User Create
    const createUser = (email, password) => {

        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // Google Sign In
    const googleLogin = () => {

        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    // User Sign In
    const login= (email, password) => {

        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // User Sign Out
    const logOut = () => {

        setLoading(true);
        return signOut(auth);
    }

    const updateUserProfile = (name, photo) => {

        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {

            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            return unsubscribe();
        }

    }, []);

    const authInfo = {
        user,
        loading,
        createUser,
        login,
        googleLogin,
        logOut,
        updateUserProfile
    }

    return (

        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
}

export default AuthProvider;