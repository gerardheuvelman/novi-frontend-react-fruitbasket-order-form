import React from 'react';

function Button({type, disabled, className, clickHandler, children }) {
    return (
        <button
            type={type}
            disabled={disabled}
            className={className}
            onClick={clickHandler}
        >
            {children}
        </button>
    );
}

export default Button;