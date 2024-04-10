'use server'
import {redirect} from 'next/navigation'

import {createUserWithEmailAndPassword} from 'firebase/auth'

import {auth} from '@/lib/firebase/firebaseInit'

async function signUpAction(formdata) {
	const email = formdata.get('email')
	const password = formdata.get('password')
	
	try {
		const userObj = await createNewUser(email, password)
		redirect('/demo')
	} catch (error) {
		console.log(error)
	}

	return null
}

export {signUpAction}

async function createNewUser(email, password) {
	return await createUserWithEmailAndPassword(auth, email, password)
}

