import React from "react";
import PropTypes from "prop-types";
import {getFunName} from "../helpers";

class StorePicker extends React.Component {

    static propTypes = {
        history: PropTypes.object
    }

    myInput = React.createRef();   

    goToStore= (event) => {
        event.preventDefault();
        // Get text from input
        const storeName = this.myInput.current.value;
        // Change page to store entered
        this.props.history.push(`/store/${storeName}`);
    }

    render() {
        return (
            <React.Fragment>
               <form 
                    className="store-selector" 
                    onSubmit={this.goToStore}>
               <h2>Please enter a store</h2>
               <input 
                    type="text" 
                    required placeholder="Store Name" 
                    defaultValue={getFunName()} 
                    ref={this.myInput} />
               <button type="submit">Visit Store</button>
               </form>
            </React.Fragment>
        )
    }
}

export default StorePicker;