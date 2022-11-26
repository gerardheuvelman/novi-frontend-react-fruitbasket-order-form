import React from 'react';

function InputComponent({ inputType, inputName, inputLabel, inputId, placeholder, validationRules, register, errors }) {
    return (
        <>
            <label htmlFor={inputId}>
                {inputLabel}
                <input
                    type={inputType}
                    id={inputId}
                    placeholder={placeholder}
                    {...register(inputName, validationRules)}
                />
            </label>
            {errors[inputName] && <span>{errors[inputName].message}</span>}
            <br/>
        </>
    );
}

export default InputComponent;