import React from 'react'
import styled from 'styled-components'

const Input = (props) => {
	return <Uiinput {...props} />
}

export default Input
const Uiinput = styled.input`
	width: 260px;
	height: 33px;
	border: 2px solid #c3cbd6;

	border-radius: 3px;

	margin-top: 20px;

	&:focus {
		border-radius: 3px;
		border-color: #2f2ffc;
		outline: none;
	}
`
