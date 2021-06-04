//rafc + tab
//obligar a setCategories, usando proptypes ( es como en java las interfaces)

import React, {useState} from 'react'
import propTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');
    //que hace esto? que es la e? la entrada, que hace target.value?
      // e.target se refiere elemento clickado <li>

    const handleInputChange = (e) => {
        setInputValue (e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 2 ) {
            setCategories(cats => [inputValue,...cats]); //ok
            setInputValue ('');
        }else {
            console.log('Debe informar el campo');
        }
        
        ;
    }

    

    return (
        <form onSubmit = {handleSubmit}>
            <input            
                type = "text"
                value = {inputValue}
                //onChange = { (e)=> console.log(e)}
                onChange = {handleInputChange}
                
            />
            <h2>AGREGAR CATEGORIA</h2>
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: propTypes.func.isRequired
}