import React from 'react';
import Wrapper from '../../../hoc/Wrapper';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
        return (
        <li key={igKey}>
            <span style={{textTransform: 'capitalize'}}>{igKey}:</span> {props.ingredients[igKey]}
        </li>)});
    return (
        <Wrapper>
            <h3>Order</h3>
            <p>A delisious burger with:</p>
            <ul>{ingredientSummary}</ul>
            <p>Continue to Checkout ?</p>
        </Wrapper>
    );
};

export default orderSummary;