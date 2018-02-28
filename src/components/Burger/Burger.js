import React from 'react';
import classes from './Burger.css';

import BurgerIngredient from'./BurgerIngredient/BurgerIngredient';


const burger = (props) => {
    let transformIngredients = Object.keys(props.ingredient)
    .map( igkey => {
        return [...Array(props.ingredient[igkey])].map((_, i) => {
            return <BurgerIngredient key={igkey + i} type={igkey}/>
        })
    })
    .reduce((arr,el) => {
        return arr.concat(el);
    },[]);

    if(transformIngredients.length === 0) {
        transformIngredients = <p>Please choose some ingredient!</p>
    }
    console.log(transformIngredients);

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger