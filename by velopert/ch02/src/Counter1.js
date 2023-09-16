import React, { Component } from 'react';

class Counter1 extends Component {

    state = {
        number: 0
    }

    /* 화살표 함수 사용 */
    handleIncrease = () => {
        this.setState({
            number: this.state.number + 1
        })
    }

    handleDecrease = () => {
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
export default Counter1;