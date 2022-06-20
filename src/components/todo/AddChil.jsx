import React from 'react';
import Modalka from '../UI/Modal';
const AddChil = (props) => {
    return (
        <div>
                	{props.error && <Modalka text={props.text}  item={props.item} setError={props.setError}/>}
            
        </div>
    );
};

export default AddChil;