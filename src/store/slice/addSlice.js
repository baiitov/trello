import { createSlice } from '@reduxjs/toolkit'
const initialState = {
	items: [],
}
const addSlice = createSlice({
	name: 'add',
	initialState,
	reducers: {
		addHandler(state, aciton) {
			let newItem = aciton.payload
			state.items.push({
				text: newItem.input,
				id: newItem.id,
				item: [],
			})
	
		},
		deleteClone(state,action){
			state.items = state.items.filter((el)=> el.id !== action.payload)
		},
		textAddHanlder(state, action) {
			let newItem = state.items.find((el) => el.id === action.payload.id)
			newItem.item.push({
				item: action.payload.textTeria,
				id: Math.random().toString(),
			})
		},
		deleteHandler(state, action) {
			let newData = state.items.find((el) => el.id === action.payload.id)
			newData.item = newData.item.filter(
				(item) => item.id !== action.payload.itemId,
			)
		},
		// headerAddHandler (state, action){
        //     let newItems =state.items.includes(action.payload)
		// 	console.log(newItems);
           
        // }
	},
})

export const addActions = addSlice.actions
export default addSlice
