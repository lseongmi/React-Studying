import React, { Component } from 'react';

class R006_LifecycleEx extends Component {
    static getDerivedStateFromProps(props, state) { //컴포넌트가 새로운 props를 받았을 때 호출
        console.log('2. getDerivedStateFromProps Call : ' +props.prop_value);
        return {};
    }

    constructor(props) {
        super(props); //Component의 생성자 메서드를 호출
        this.state = {};
        console.log('1. constructor Call');
    }

    render() {
        console.log('3. render Call');
        return (
            <h2>[ THIS IS CONSTRUCTOR FUNCTION ]</h2>
        )
    }
}

export default R006_LifecycleEx;