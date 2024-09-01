import React, { Component } from 'react';

class R017_Props extends Component {
    render() {
        let props_value = this. props.props_val; //props : 부모 컴포넌트가 자식 컴포넌트에 데이터를 전달 할때 사용
        props_value += 'from App.js';
        return (
            <div>{props_value}</div>
        )
    }
}

export default R017_Props;