import React, {Component} from 'react';
import Wrapper from '../../../hoc/Wrapper/Wrapper';
import Button from '../../IU/Button/Button';

class OrderSummary extends Component {
    componentWillUpdate() {
        console.log('[OrderSummary] Willupdate')
    }
    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return (
                    <li key={igKey}>
                        <span style={{ textTransform: 'capitalize' }}>{igKey}:</span> {this.props.ingredients[igKey]}
                    </li>)
            });
        return (
            <Wrapper>
                <h3>Order</h3>
                <p>A delisious burger with:</p>
                <ul>{ingredientSummary}</ul>
                <p><strong>Total Price: {this.props.price.toFixed(2)} $</strong></p>
                <p>Continue to Checkout ?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCencel}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinue}>CONTINUE</Button>
            </Wrapper>
        )
    }
}

export default OrderSummary;