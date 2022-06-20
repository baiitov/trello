import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import styled from 'styled-components'
import { addActions } from '../../store/slice/addSlice'
import { uiActions } from '../../store/slice/uiSlice'
import TodoChildren from './TodoChildren'
const AddTodo = (props) => {
	const [textTeria, setTextTeria] = useState('')
	const dispatch = useDispatch()
	const [toggle, setIsToggle] = useState(true)
	const textTeriaHandler = (e) => {
		setTextTeria(e.target.value)
	}
	const deleteHandler =(e)=> {
		dispatch(addActions.deleteClone(e.target.id))
	}
	const submitHanlder = ()=>{
		if(textTeria.trim()===''){
			return
		}

      dispatch(addActions.textAddHanlder({
		textTeria: textTeria,
		id: props.id
	  }))
	  setTextTeria('')
	}

	return (
		<AddTo key={props.id}>
			<AddDiv>
				<Text>{props.text}</Text>
				<Img onClick={deleteHandler} id={props.id} src="https://img.icons8.com/stickers/344/remove.png" alt="" />
				{toggle && (
					<Kartochku id={props.id} onClick={() => setIsToggle(false)}>
						<span>+</span>
						<p>Добавить карточку</p>
					</Kartochku>
				)}
				{!toggle && (
					<KartochkuNe>
						<TodoChildren id={props.id} text={props.text} item={props.item}/>

						<textarea
						value={textTeria}
							onChange={textTeriaHandler}
							placeholder='Ввести заговолок для этой карточки'
							cols='32'
							rows='4'
						></textarea>
						<button type='submit' onClick={submitHanlder}>добавить Карточку</button>
						<img
							onClick={() => setIsToggle(true)}
							src='https://img.icons8.com/officel/344/multiply.png'
							alt=''
						/>
					

					</KartochkuNe>
				)}
			</AddDiv>
		</AddTo>
	)
}

export default AddTodo
const AddTo = styled.div`

	display: flex;
	justify-content: space-between;
`
const Img = styled.img`
	width:30px;
	height: 30px;
	margin-top: -19px;
	margin-left: 220px;
	

`
const AddDiv = styled.div`
	width: 272px;
	margin-left: 5px;
	height: 85px;
	background-color: #dce9f9;
	border-radius: 5px;
	margin-bottom: 10px;
`
const Kartochku = styled.div`
	display: flex;
	margin-top: 15px;
	margin-left: 15px;
	span {
		color: #5d6983;
		font-size: 25px;
		position: relative;
		bottom: 8px;
	}
	p {
		font-size: 14px;
		margin-top: 1px;
		color: #5d6983;
	}
`
const Text = styled.p	`
	/* text-align: start; */
	/* margin-left: 20px; */
	margin-right: 210px;
	position: relative;
	top: 15px;
	
`
const KartochkuNe = styled.div`
	width: 272px;
	background-color: #dce9f9;
	max-height: 1000px;
	button {
		width: 133px;
		height: 32px;
		background-color: #2b63fc;
		border: none;
		border-radius: 3px;
		color: white;
		position: relative;
		bottom: 3px;
	}
	img {
		width: 25px;
		margin-right: 100px;
		/* margin-top: 10px; */
		position: relative;
		top: 5px;
		left: 7px;
	}
	textarea {
		-webkit-box-shadow: 0px 0px 19px 5px rgba(139, 128, 128, 0.71);
		box-shadow: 0px 1px 1px 1px rgba(163, 156, 156, 0.71);
		color: #5d6983;
		margin-top: 16px;
		border: none;
		height: 60px;
		border-radius: 5px;
		outline: none;
	}
`
