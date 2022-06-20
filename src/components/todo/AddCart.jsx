import React from 'react';
import { useSelector } from 'react-redux';
import AddTodo from './AddTodo';
import styled from 'styled-components';
import Add from './Add';

const AddCart = () => {
    const addTodo = useSelector((state) => state.add.items)
 
    return (
        <Cart>
            {addTodo.map((el)=> {
              return  <AddTodo key={el.id} item={el.item} text={el.text} id={el.id}/>
            })}
            
        </Cart>
    );
};

export default AddCart;
const Cart = styled.div`
    
    display: flex;
`