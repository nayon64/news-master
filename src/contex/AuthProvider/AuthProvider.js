import React, { createContext, useEffect, useState } from 'react';
import {getAuth, onAuthStateChanged, signInWithPopup} from "firebase/auth"
import app from '../../firebase/firebase.config';

export const AuthContext = createContext()
const auth=getAuth(app)

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null)
	
	const providerSignIn = (provider) => {
		return signInWithPopup(auth,provider)
	}
	
	useEffect(() => {
		const unsubcribe=onAuthStateChanged(auth, (CurrentUser) => {
			setUser(CurrentUser)
			console.log('set user info')
		})
		return ()=>unsubcribe()
	},[])
	// const user = { displayName: 'Tory' }
	
	const authInfo = { user,providerSignIn }

	return (
		<AuthContext.Provider value={authInfo}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;