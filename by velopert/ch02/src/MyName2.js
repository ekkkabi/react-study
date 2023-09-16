import React from 'react';

/* 함수형 컴포넌트 */
const MyName2 = ({ name }) => {
    return <div>안녕하세요! 저는 <b>{name}</b> 입니다. </div>
}

/*default 값 부여 방법2*/
MyName2.defaultProps = {
    name: 'React'
}

export default MyName2;