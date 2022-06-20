import { createSlice } from '@reduxjs/toolkit'
const initialState = [
	{
		email: 'baitovbilal@gmail.com',
		password: '123456',
	},
	{
		email: 'gafurovtariel@gmail.com',
		password: '123456',
	},
]
const Login = createSlice({
	name: 'login',
	initialState,
	reducers: {
		addLogin(state, action) {},
	},
})
export const actionLogin = Login.actions
export default Login
