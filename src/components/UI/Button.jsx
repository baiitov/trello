import React from 'react'
import styled from 'styled-components'

const Button = (props) => {
	return <Btn {...props}>{props.children}</Btn>
}

export default Button
const Btn = styled.button`
	width: 268px;
	height: 34px;
	background-color: rgb(90, 162, 90);
	border: none;
	border-radius: 4px;
	color: white;

	margin-top: 16px;
	font-family: 'bold';
	&:disabled,
	&:disabled:hover,
	&:disabled:active {
		background-color: rgb(200, 200, 200);
		color: rgb(35, 35, 37);
		cursor: not-allowed;
	}
	&:active{
		background-color: rgb(10, 91, 10);
	}
`
