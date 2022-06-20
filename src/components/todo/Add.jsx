import React, { useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Headers from '../header/Headers'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { uiActions } from '../../store/slice/uiSlice'
import { addActions } from '../../store/slice/addSlice'
import AddCart from './AddCart'

const Add = () => {
	const [input, setInput] = useState('')
	const [isShow, setIsShow] = useState(true)
	const dispatch = useDispatch()

	const inputHandler = (e) => {
		setInput(e.target.value)
	}

	const submitHandler = (e) => {
		e.preventDefault()
		if(input.trim()===''){
			return
		}
		dispatch(addActions.addHandler({
			input,
			id: Math.random().toString()
		}))
		setInput('')
	}
	return (
		<>
			<Headers />
			<Display >
			<AddCart />
				{isShow && (
					<Kolonku onClick={() => setIsShow(false)}>
						<span>+</span>
						<p>Добавьте еще одну колонку</p>
					</Kolonku>
				)}
			

				{!isShow && (
					<IsKolonku>
						<input 
						value={input}
							type='text'
							onChange={inputHandler}
							placeholder='Ввести заголок списка'
						/>
						<div>
							<button onClick={submitHandler} type='submit'>
								Добавить список{' '}
							</button>
							<img
								onClick={() => setIsShow(true)}
								src='https://img.icons8.com/officel/344/multiply.png'
								alt=''
							/>
						</div>
					</IsKolonku>
				)}
			</Display>

			<AddFon />
		</>
	)
}

export default Add
const AddFon = createGlobalStyle`
body{

    width: 100%;
height: 100%;
background-color: #2f67ff;
}

`
const Display = styled.div`
	display: flex;
	
`

const Kolonku = styled.div`
	display: flex;
	width: 272px;
	border-radius: 5px;
	height: 40px;
	background-color: #7293ee;
	margin-left: 7px;
	/* & :hover{
		background-color: #9cb4f9;
           
	} */

	span {
		color: white;
		margin-left: 12px;
		font-size: 26px;
	}
	p {
		color: white;
		font-size: 14px;
		margin-top: 10px;
	}
`
const IsKolonku = styled.div`
	width: 272px;
	height: 85px;
	background-color: #dce9f9;
	border-radius: 3px;

	margin-left: 6px;
	div {
		margin-right: 107px;
	}
	img {
		width: 25px;
		position: relative;
		top: 8px;
		left: 5px;
	}
	input {
		width: 260px;
		border: 2px solid #2b63fc;
		outline: none;
		height: 32px;
		margin-top: 5px;
		border-radius: 3px;
	}
	button {
		width: 133px;
		height: 32px;
		background-color: #2b63fc;
		border: none;
		border-radius: 3px;
		color: white;
		/* margin-right: 50px; */
	}
`
