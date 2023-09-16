import React, { Component } from 'react';

/* 클래스형 컴포넌트 */
class MyName1 extends Component {

    /*default 값 부여 방법1*/
    static defaultProps = {
        name: '기본이름'
    }

    render() {
        return (
            <div>
                안녕하세요! <b>{this.props.name} 입니다.</b>
            </div>
        );
    }
}

export default MyName1;