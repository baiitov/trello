import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { addActions } from '../../store/slice/addSlice'
import AddChil from './AddChil'
const TodoChildren = ({ id, item, text }) => {
	const dispatch = useDispatch()
	const [error, setError] = useState(false)
	const errorHandler = (e) => {
		setError(true)
	}
	const deleteHanlder=(e)=>{
          dispatch(addActions.deleteHandler({
			id:id,
			itemId: e.target.id
		  }))
	}
	return (
		<>
			<div>
				{item.map((el) => (
					<div key={el.id}>
						<Item id={el.id} >
							<p onClick={errorHandler}>{el.item}</p>
							<ItemImg onClick={deleteHanlder} id={el.id}
								src='https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/344/external-delete-multimedia-kiranshastry-lineal-kiranshastry.png'
								alt=''
							/>
						</Item>
						<AddChil
							text={text}
							item={el.item}
							error={error}
							setError={setError}
						/>
					
					</div>
				))}
			</div>
		</>
	)
}

export default TodoChildren
const Item = styled.div`
	width: 256px;
	-webkit-box-shadow: 0px 0px 19px 2px rgba(139, 128, 128, 0.71);
	box-shadow: 2px 1px 5px 1px rgba(163, 156, 156, 0.71);
	color: #172b4d;
	background-color: #ffffff;
	height: 32px;
	border-radius: 5px;
	margin-top: 8px;
	margin-left: 9px;
	display: flex;
	justify-content: space-between;
	p{
		margin-left: 10px;
	}

`
const ItemImg = styled.img`
	width: 17px;
	height: 22px;
	


`
