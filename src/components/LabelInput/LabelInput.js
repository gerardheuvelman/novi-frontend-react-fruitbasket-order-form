import React from 'react';

function LabelInput( {children, type, id, name, value, onChange} ) {
    return (
        <label htmlFor={id}
        >
            {children}
            <input
                type={type}
                id={id}
                name={name}
                value={value}
                onChange={onChange}
            />
            <br/>
        </label>
            );
}

export default LabelInput;