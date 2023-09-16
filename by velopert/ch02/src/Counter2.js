import React, { Component } from 'react';

class Counter2 extends Component {

    state = {
        number: 0
    }

    /* 생성 함수 호출 */
    constructor(props) {
        super(props);
        this.handleIncrease = this.handleIncrease.bind(this);
        this.handleDecrease = this.handleDecrease.bind(this);
    }

    /* 일반 함수 사용 */
    handleIncrease() {
        this.setState({
            number: this.state.number + 1
        })
    }

    handleDecrease() {
        this.setState({
            number: this.state.number - 1
        })
    }

    render() {
        return (
            <div>
                <h1>카운터</h1>
                <div> 값 : <b>{this.state.number}</b></div>
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handleDecrease}>-</button>
            </div>
        );
    }
}
export default Counter2;