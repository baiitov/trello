import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import image from '../../assets/img/bilal.jpg'
import { addActions } from '../../store/slice/addSlice'
const Headers = () => {
	const dispatch = useDispatch()
	const titleHandler = (e) => {
		dispatch(addActions.addHandler({ value: e.target.value }))
	}
	return (
		<Header>
			<FonSpan>
				<Icon
					src='https://thumbs.dreamstime.com/b/trello-logo-vector-format-available-illust-rator-ai-139701502.jpg'
					alt=''
				/>
				<Boards>Boards</Boards>
			</FonSpan>
			<Divpoick>
				<Poick type='text' onChange={titleHandler} />
				<IconPoick
					src='https://img.icons8.com/officel/2x/search.png'
					alt=''
				/>
			</Divpoick>
			<TrelloDiv>
				<Icon
					src='https://thumbs.dreamstime.com/b/trello-logo-vector-format-available-illustrator-ai-139701502.jpg'
					alt=''
				/>
				<Trelloh2>Trello</Trelloh2>
			</TrelloDiv>
			<Plus>
				<h2>+</h2>
			</Plus>
			<ImageDiv>
				<Image src={image} alt='' />
				<h2>Bilal Baitov</h2>
			</ImageDiv>
			<ImgDiv>
				<Imageg
					src='data:image/jpeg;base64,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'
					alt=''
				/>
			</ImgDiv>
		</Header>
	)
}

export default Headers

const ImgDiv = styled.div`
	width: 4%;
	height: 88%;
	margin-left: 15px;

	background-color: #828ec5;
`
const Imageg = styled.img`
	width: 70%;
	height: 85%;
	margin-top: 4px;
`
const ImageDiv = styled.div`
	display: flex;
	width: 17%;
	height: 90%;
	border-radius: 5px;
	background-color: #828ec5;
	margin-left: 34px;
	h2 {
		color: white;
		margin-top: 4px;
		margin-left: 8px;
		border-radius: 5px;
	}
`
const Image = styled.img`
	width: 20%;
	height: 90%;
	margin-top: 3px;
	border-radius: 4px;
`
const Header = styled.header`
	width: 100%;
	height: 48px;
	background-color: #186db8;
	padding-top: 8px;
	display: flex;
	margin-bottom: 10px;
`
const Icon = styled.img`
	margin-left: 6px;
	width: 33%;
	height: 80%;
	margin-top: 4px;
`
const FonSpan = styled.div`
	width: 10%;
	height: 90%;
	display: flex;
	background-color: #828ec5;
	border-radius: 3px;
	margin-left: 10px;
`
const Boards = styled.h3`
	color: white;
	margin-top: 5px;
	margin-left: 5px;
`
const Divpoick = styled.div`
	width: 20%;
	height: 90%;
	background-color: #828ec5;
	margin-left: 20px;
	display: flex;
	border-radius: 5px;
`
const Poick = styled.input`
	background-color: #828ec5;
	width: 83%;
	height: 90%;
	border: none;
	outline: none;
	color: white;
`
const IconPoick = styled.img`
	width: 13%;
	height: 88%;
	margin-top: 5px;
`
const Trelloh2 = styled.em`
	color: white;
	margin-top: 4px;
	font-size: 27px;
	margin-left: 7px;
	font-family: Dancing Script;
`
const TrelloDiv = styled.div`
	display: flex;
	margin-left: 250px;
`
const Plus = styled.div`
	width: 4%;
	height: 90%;
	background-color: #828ec5;
	margin-left: 260px;
	border-radius: 4px;
	h2 {
		color: white;
		padding: 5px;
		font-size: 40px;
		margin-top: -15px;
	}
`
