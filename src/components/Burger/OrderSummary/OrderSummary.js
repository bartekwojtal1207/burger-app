import React, {Component} from 'react';
import Aux from '../../../hoc/Auxs/Auxs';

import Button from '../../UI/Button/Button';

class OrderSummary extends Component {

    componentWillUpdate() {
        console.log('asdasd')
    }


    render() {
        console.log('a111111111111111111')
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}:</span> {this.props.ingredients[igKey]}</li>
            });

        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicius burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <b>Total Price: ${this.props.totalPrice.toFixed(2)}</b>
                <p>Continue to Checkout ?</p>
                <Button btnType={'Danger'} clicked={this.props.cancelOrder}>Cancel</Button>
                <Button btnType={'Success'} clicked={this.props.continueOrder}>Continue</Button>
            </Aux>

        )
    }

};


export default OrderSummary;