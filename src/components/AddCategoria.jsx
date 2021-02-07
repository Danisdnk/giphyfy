import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategoria = ({ setCategorias }) => {

    const [InputValue, setInputValue] = useState('')
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (InputValue.trim().length > 2) {
            setCategorias(cat => [InputValue, ...cat]);
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type={"text"}
                value={InputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}

AddCategoria.propTypes = {
    setCategorias: PropTypes.func.isRequired
}