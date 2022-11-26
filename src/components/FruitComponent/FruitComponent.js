import React from 'react';
import Button from "../Button/Button";
import './FruitComponent.css'; // DIT IS OPTIONEEL???

function FruitComponent({ children, numFruit, minFunction, plusFunction }) {

    return (
        <>
        <fieldset>
        <span>
            {children}
        </span>
            <Button
                type="button"
                disabled={numFruit <= 0}
                className="button"
                clickHandler={minFunction}
            >-</Button>
            <span>{numFruit}</span>
            <Button
                type="button"
                disabled={numFruit >= 10}
                className="button"
                clickHandler={plusFunction}
            >+</Button>
        </fieldset>
        </>
);
}

export default FruitComponent;