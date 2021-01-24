import React, { useState } from 'react'


export const AddCategoria = () => {

    const [InputValue, setInputValue] = useState("search")
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }
    const handleSubmit = (e) => {
       e.preventDefault();
        console.log("submit echo");
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
