import React from "react";

import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";
import sampleFishes from "../sample-fishes"


class App extends React.Component{
    state = {
        fishes: {},
        order: {}
    }

    addFish = fish => {
       const fishes = {...this.state.fishes};
        fishes[`fish${Date.now()}`] = fish;
        this.setState({
            fishes: fishes
        })        
    }

    loadSamples = () => {
        // console.log("This fish tho!");
        this.setState({fishes: sampleFishes});
    }

    render(){
        return (
            <div className="catch-of-the-day">
            <div className="menu">
                <Header tagline="Fresh Seafood Market"/>
            
            </div>
            <Order />
            <Inventory addFish={this.addFish} loadSamples={this.loadSamples} />
            </div>
        )
    }
}

export default App;