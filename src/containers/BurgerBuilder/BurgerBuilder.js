import React, {Component} from 'react';

import Wrapper from '../../hoc/Wrapper';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad:0,
            bacon: 0,
            cheese: 1,
            meat: 2
        }
    }
    render(){
        return (
            <Wrapper>
                <Burger ingredient={this.state.ingredients} />
                <div>Build controlers</div>
            </Wrapper>
        );
    }
}

export default BurgerBuilder;