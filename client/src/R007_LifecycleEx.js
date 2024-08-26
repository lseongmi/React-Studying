import React, { Component } from 'react';

class R007_LifecycleEx extends Component {
    static getDerivedStateFromProps(props, state) {
        console.log('2. getDerivedStateFromProps Call :' + props.prop_value);
        return {tmp_state:props.prop_value}; // tmp_state: props.prop_value 는 새로운 state로 설정
    }

    constructor(props) {
        super(props);
        this.state = {};
        console.log('1. constructor Call');
    }

    componentDidMount() { // DOM에 마운트된 후 호출, API 호출, 타이머 설정 등과 같은 초기화 작업을 수행하는 데 주로 사용
        //컴포넌트가 렌더링된 후 호출
        console.log('4. componentDidMount Call');
        console.log('5. tmp_state : ' + this.state.tmp_state);
    }

    render() {
        console.log('3. render Call');

        return (
            <h2>[ THIS IS IMPORTED COMPONENT ]</h2>
        )
    }
}

export default R007_LifecycleEx;