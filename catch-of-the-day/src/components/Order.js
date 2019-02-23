import React from "react";
import {formatPrice} from "../helpers";

class Order extends React.Component {
    renderOrder = (key) => {
        const fish = this.props.fishes[key];
        const count = this.props.order[key];
        const isAvailable = fish && fish.status === "available";
        
        if (!fish) return null;

        if (!isAvailable) {
            return <li key={key}>
                        Sorry {fish ? fish.name: "fish"} is not available
                    </li>
        }

        return <li key={key}>
            {count}lbs {fish.name}

            {formatPrice(count * fish.price)}
            <button onClick={() => this.props.removeFromOrder(key)}>x</button>
        </li>
    }

    render() {
        const orderID = Object.keys(this.props.order);
        const total = orderID.reduce((prevTotal, key) => {
            const fish = this.props.fishes[key];
            const count = this.props.order[key];
            const isAvailable = fish && fish.status === "available";
            
            if (isAvailable) {
                return prevTotal + (count * fish.price);
            }
            return prevTotal
        },
        0
        );
         

        return (
            <React.Fragment>
                <div className="order-wrap">
                <h2>Order</h2>
                <div className="total">
                Total: <strong>{formatPrice(total)}</strong> 
                </div>
                <ul className="order">
                    {orderID.map(this.renderOrder)}
                </ul>
                </div>
            </React.Fragment>
        )
    }
}

export default Order;