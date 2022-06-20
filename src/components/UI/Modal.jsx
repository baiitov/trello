import React, { useState } from 'react'

import styled from 'styled-components'
import ReactDOM from 'react-dom'
const Backdrop = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	background: rgba(0, 0, 0, 0.75);
	z-index: 10;
`

const Modal = (props) => {
	const [toggle, setToggle] = useState(false)
	const [comment, setComment] = useState(false)
	return (
		<Backdrop>
			<ModalDiv>
				<Modl1>
					<ImgModal
						src='https://img.icons8.com/ios-glyphs/2x/web-design.png'
						alt=''
					/>
					{/* {newItem.map((el) => (
						<Items key={el.id}>{el.item}</Items>
					))} */}
					<Items>{props.item}</Items>
					<Img
						onClick={() => props.setError(false)}
						src='https://img.icons8.com/officel/344/multiply.png'
						alt=''
					/>
				</Modl1>
				<Vkolonke>в колонке {props.text}</Vkolonke>

				<Modl2>
					<ImgModal2 src='https://img.icons8.com/ios-filled/344/menu-rounded.png' />
					<Opisanie>Описание</Opisanie>
				</Modl2>
				{!toggle && (
					<DivOpisanie onClick={() => setToggle(true)}>
						<p>Добавить более подробное описание...</p>
					</DivOpisanie>
				)}
				{toggle && (
					<DivOpisanie2>
						<Textarea cols='70' rows='7'></Textarea>
						<AddDiv>
							<AddButton>Сохранит</AddButton>
							<OtButton onClick={() => setToggle(false)}>
								Отмена
							</OtButton>
							<p>Помощ по форматированию</p>
						</AddDiv>
					</DivOpisanie2>
				)}
				<KomentDiv>
					<img
						src='https://img.icons8.com/small/344/comments.png'
						alt=''
					/>
					<h4>Действия</h4>
					<p>Показать подробности </p>
				</KomentDiv>
				{!comment && (
					<Comment onClick={() => setComment(true)}>
						<p>Напиши комментарий...</p>
					</Comment>
				)}
				{comment && (
					<Comment2>
						<input
							placeholder='Напиши комментарий...'
							type='text'
						/>
						<button>Сохранит</button>
						<img
							onClick={() => setComment(false)}
							src='https://img.icons8.com/officel/344/multiply.png'
							alt=''
						/>
					</Comment2>
				)}
			</ModalDiv>
		</Backdrop>
	)
}

const Modalka = (props) => {
	return (
		<>
			{ReactDOM.createPortal(
				<Modal item={props.item} text={props.text} setError={props.setError} />,
				document.getElementById('modal'),
			)}
			,
		</>
	)
}
export default Modalka
const ModalDiv = styled.div`
	width: 800px;
	height: 600px;
	background-color: #dce9f9;
	border-radius: 3px;
	text-align: start;
	position: relative;
	top: 100px;
	margin: 0 auto;
	z-index: 10;
`
const ImgModal = styled.img`
	width: 30px;
	height: 30px;
	margin-top: 19px;
	margin-left: 30px;
`
const Modl1 = styled.div`
	display: flex;

`
const Img =styled.img`
width: 40px;
height: 40px;
margin-left: 590px;
margin-top: 16px;

`
const Items = styled.h3`
	margin-left: 10px;
	color: #5d6983;
	font-size: 20px;
`
const Vkolonke = styled.p`
	margin-left: 60px;
	margin-top: -10px;
	font-size: 20px;
	color: #5d6983;

`
const Modl2 = styled.div`
	display: flex;
`
const ImgModal2 = styled.img`
	margin-top: 60px;
	width: 30px;
	height: 30px;
	margin-left: 30px;
`
const Opisanie = styled.h4`
	margin-top: 58px;
	font-size: 25px;
	color: #5d6983;
	margin-left: 20px;
`
const DivOpisanie = styled.div`
	color: #5d6983;
	width: 630px;
	height: 60px;

	background-color: #c1cadc;
	border-radius: 5px;
	margin-left: 80px;

	p {
		position: relative;
		top: 5px;
		left: 15px;
	}
`

const DivOpisanie2 = styled.div``
const Textarea = styled.textarea`
	margin-left: 100px;
	outline: none;
	width: 600px;
	&:focus {
		border: 3px solid #2b63fc;
	}
`
const AddButton = styled.button`
	width: 133px;
	height: 32px;
	background-color: #2b63fc;
	border: none;
	border-radius: 3px;
	color: white;
	position: relative;
	bottom: 3px;
`
const AddDiv = styled.div`
	display: flex;
	margin-left: 100px;
	margin-top: 10px;
	p {
		width: 218px;
		background-color: #c1cadc;
		height: 34px;
		color: #5d6983;
		border-radius: 5px;
		margin-left: 120px;
	}
`

const OtButton = styled.button`
	width: 133px;
	height: 32px;
	background-color: white;
	border: none;
	border-radius: 3px;
	color: #5d6983;
	position: relative;
	bottom: 3px;
	margin-left: 10px;
	&:hover {
		background-color: #ededed;
	}
`
const KomentDiv = styled.div`
	display: flex;
	img {
		width: 30px;
		height: 30px;
		margin-left: 30px;
		margin-top: 50px;
	}
	h4 {
		margin-top: 58px;
		font-size: 25px;
		color: #5d6983;
		margin-left: 10px;
		margin-top: 47px;
	}
	p {
		width: 218px;
		background-color: #c1cadc;
		height: 34px;
		color: #5d6983;
		border-radius: 5px;
		margin-left: 320px;
		text-align: center;
		align-items: center;
		margin-top: 50px;
	}
`

const Comment = styled.div`
	color: #5d6983;
	width: 630px;
	height: 48px;
	-webkit-box-shadow: 0px 0px 19px 2px rgba(139, 128, 128, 0.71);
	box-shadow: 2px 1px 5px 1px rgba(163, 156, 156, 0.71);
	background-color: #ffffff;
	border-radius: 5px;
	margin-left: 80px;

	p {
		margin-left: 10px;
		margin-top: 5px;
		position: relative;
		top: 10px;
	}
`
const Comment2 = styled.div`
	width: 630px;
	border-radius: 5px;
	margin-left: 80px;
	background-color: #ffffff;
	height: 104px;
	input {
		width: 590px;

		height: 31px;
		outline: none;
		border: none;
	}
	button {
		width: 133px;
		height: 32px;
		background-color: #2b63fc;
		border: none;
		border-radius: 3px;
		color: white;
		margin-top: 29px;
		margin-left: 8px;
	}
	img {
		width: 30px;
		margin-right: 100px;
		/* margin-top: 10px; */
		position: relative;
		top: 12px;
		left: 7px;
	}
`
