import React, { Component } from "react";
import BoxClass from "./components/BoxClass";

/** class components 실습 */
export default class AppClass extends Component {

    // 생성자를 통해 저장소를 만든다.
    constructor(props) {
        super(props);
        this.state = {
            counter2: 0,
            num: 1,
            value: 0
        }
    };

    increase = () => {
        this.setState({
            counter2: this.state.counter2 + 1,
            value: this.state.value + 1
        })
    };

    decrease = () => {
        this.setState({
            counter2: this.state.counter2 - 1,
            value: this.state.value - 1
        })
    };

    render() {
        return (
            <div>
                <h2>AppClass</h2>
                state: {this.state.counter2}
                {this.state.value < 3 && <BoxClass num={this.state.value}/>}
                <div className="main_class">
                    <button onClick={this.increase}>increase!</button>
                    <button onClick={this.decrease}>decrease!</button>
                </div>
            </div>
        );
    }
};