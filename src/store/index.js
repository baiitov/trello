
import { configureStore } from '@reduxjs/toolkit'
import addSlice from './slice/addSlice'
import Login from './slice/loginSlice'
import uiSlice from './slice/uiSlice'

const store = configureStore({
	reducer: {
		loginSlice: Login.reducer,
		ui: uiSlice.reducer,
		add: addSlice.reducer

	},
})
export default store
