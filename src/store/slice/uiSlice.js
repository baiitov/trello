import { createSlice } from '@reduxjs/toolkit'
const initialState = {
	isLoading: false,
    header: []
} 
const uiSlice = createSlice({
	name: 'ui',
	initialState,
	reducers: {
        uiLoading(state, action){
            state.isLoading = state.isLoading= true
        },
        neLoading (state,action){
            state.isLoading = state.isLoading = false
        },
        isShowTrueHandler (state,action) {
            state.isShow = state.isShow = true
        },
        isShowFalseHandler (state,action){
            state.isShow = state.isShow =false
        },
    
       
        
    },
})
export const uiActions = uiSlice.actions
export default uiSlice
